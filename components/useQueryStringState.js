import { useRouter } from "next/router";

const DO_NOTHING = (i) => i;

function useQueryStringState(queryParamName, processValue = DO_NOTHING) {
	const router = useRouter();
	const queryParams = router.query;
	const state = queryParams[queryParamName];
	const setState = (val) => {
		// Do nothing if value hasn't changed.
		if (val === processValue(queryParams[queryParamName])) {
			return;
		}

		// Remove it if value is nullish.
		if (val === null || val === undefined) {
			const { [queryParamName]: omit, ...rest } = queryParams;
			router.push({
				pathname: location.pathname,
				query: rest,
			});
			return;
		}

		// Push to the new value.
		router.push({
			pathname: location.pathname,
			query: { ...queryParams, [queryParamName]: val },
		});
	}

	return [processValue(state), setState];
}

export default useQueryStringState;
