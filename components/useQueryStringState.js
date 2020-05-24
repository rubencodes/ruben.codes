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
	const { query: queryParams, pathname, push } = useRouter();
	const { [queryParamName]: state, ...otherQueryParams } = queryParams;
	const setState = (newValue) => {
		// Do nothing if value hasn't changed.
		if (newValue === processValue(state)) {
			return;
		}

		// Remove it if value is nullish.
		if (newValue === null || newValue === undefined) {
			push({
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
		push({
			pathname,
			query: nextQueryParams,
		}, {
			pathname: location.pathname,
			query: removeKeysInUrl(nextQueryParams, pathname),
		}, {
			shallow: true,
		});
	}

	return [processValue(state), setState];
}

export default useQueryStringState;
