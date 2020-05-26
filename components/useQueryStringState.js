import { useRouter } from "next/router";
import queryString from "query-string";

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

const getFallbackValue = (path, queryParamName) => {
	const queryParams = queryString.parse(path.slice(path.indexOf("?")));
	return queryParams[queryParamName] ?? null;
};

function useQueryStringState(queryParamName, processValue = DO_NOTHING) {
	const {
		asPath,
		pathname,
		query: {
			[queryParamName]: value = getFallbackValue(asPath, queryParamName),
			...otherQueryParams
		},
		replace,
	} = useRouter();

	const setValue = (newValue) => {
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
	};

	return [processValue(value), setValue];
}

export default useQueryStringState;
