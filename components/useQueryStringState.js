import { useCallback, useRef } from "react";
import { useRouter } from "next/router";

const DO_NOTHING = (i) => i;

/*
	Nextjs won't automatically remove queryparams
	that are actually route params, so this does.
*/
const removeKeysInUrl = (object, url) => {
	const copy = { ...object };
	Object.keys(object).forEach((key) => {
		if (url.includes(`[${key}]`)) {
			delete copy[key];
		}
	});

	return copy;
};

function useQueryStringState(queryParamName, processValue = DO_NOTHING) {
	const { query: queryParams, pathname, replace } = useRouter();
	const { [queryParamName]: value = null, ...otherQueryParams } = queryParams;
	const setStateRef = useRef();
	setStateRef.current = useCallback((newValue) => {
		// Do nothing if value hasn't changed.
		if (newValue === processValue(value)) {
			return;
		}

		// Remove it if value is nullish.
		if (newValue === null || newValue === undefined) {
			replace({
				pathname,
				query: otherQueryParams,
			}, {
				pathname: location.pathname,
				query: removeKeysInUrl(otherQueryParams, pathname),
			}, {
				shallow: true,
			});
			return;
		}

		// Push to the new value.
		const nextQueryParams = {
			...otherQueryParams,
			[queryParamName]: newValue
		};
		replace({
			pathname,
			query: nextQueryParams,
		}, {
			pathname: location.pathname,
			query: removeKeysInUrl(nextQueryParams, pathname),
		}, {
			shallow: true,
		});
	}, [queryParamName, processValue(value)]);

	return [processValue(value), setStateRef.current];
}

export default useQueryStringState;
