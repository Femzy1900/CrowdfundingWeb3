import { createThirdwebClient } from "thirdweb";

// Replace this with your client ID string
// refer to https://portal.thirdweb.com/typescript/v5/client on how to get a client ID
const clientId = '50e775de9a6bb65ae8cf99b97f274ace';

export const client = createThirdwebClient({
  clientId: clientId,
});
