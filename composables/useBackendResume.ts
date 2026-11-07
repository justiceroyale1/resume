import { useAtsHelpers } from "./atsHelpers";

export const useBackendResume = () => {
  const helpers = useAtsHelpers();
  helpers['position'] = 'Senior Backend Sofware Engineer'
  return helpers;
}
