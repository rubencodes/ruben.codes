import React, { useCallback, useMemo } from "react";
import { useRouter } from "next/router";

const DO_NOTHING = <InputValue>(i: InputValue): InputValue => i;

/*
	Nextjs won't automatically remove queryparams
	that are actually route params, so this does.
*/
const removeKeysInUrl = (object: Record<string, any>, url: string) => {
  const copy = { ...object };
  Object.keys(object).forEach((key) => {
    if (url.includes(`[${key}]`)) {
      delete copy[key];
    }
  });

  return copy;
};

function useQueryStringState<Value extends string | number | boolean | null>(
  queryParamName: string,
  processValue: (value: string | string[] | null) => Value,
): [Value, (newValue: React.SetStateAction<Value>) => void] {
  const {
    pathname,
    query: { [queryParamName]: value = null, ...otherQueryParams },
    replace,
  } = useRouter();

  const currentValue = useMemo(
    () => processValue(value),
    [value, processValue],
  );
  const setValue = useCallback(
    (_newValue: React.SetStateAction<Value>) => {
      // Handle function type.
      let newValue: Value;
      if (typeof _newValue === "function") {
        newValue = _newValue(currentValue);
      } else {
        newValue = _newValue;
      }

      // Do nothing if value hasn't changed.
      if (newValue === currentValue) {
        return;
      }

      // Remove it if value is nullish.
      if (newValue === null || newValue === undefined) {
        replace(
          {
            pathname,
            query: otherQueryParams,
          },
          {
            pathname: location.pathname,
            query: removeKeysInUrl(otherQueryParams, pathname),
          },
          {
            shallow: true,
          },
        );
        return;
      }

      // Push to the new value.
      const nextQueryParams = {
        ...otherQueryParams,
        [queryParamName]: newValue,
      };
      replace(
        {
          pathname,
          query: nextQueryParams,
        },
        {
          pathname: location.pathname,
          query: removeKeysInUrl(nextQueryParams, pathname),
        },
        {
          shallow: true,
        },
      );
    },
    [queryParamName, processValue, value],
  );

  return [currentValue, setValue];
}

export default useQueryStringState;
