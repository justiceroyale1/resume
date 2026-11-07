import { useAtsHelpers } from "./atsHelpers";

export const useFullstackResume = () => {
  const helpers = useAtsHelpers();
  helpers['position'] = 'Senior Full-stack Sofware Engineer'
  return helpers;
};
