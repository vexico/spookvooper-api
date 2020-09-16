# API Routes

Allowed routes from the spookvooper api.
**Note:** All API routes are api.spookvooper.com OR spookvooper.com/api/

## /User Routes

- /GetUser [svid]: Returns all user data
- /GetUsername [svid]: Returns username
- /GetSVIDFromUsername [username]: Returns SVID
- /GetUsernameFromDiscord [discordid]: Returns username
- /GetSVIDFromDiscord [discordid]: Returns SVID
- /GetUsernameFromMinecraft [minecraftid]: Returns username
- /GetSVIDFromMinecraft [minecraftid]: Returns SVID
- /HasDiscordRole [userid, role]: Returns true or false
- /GetDiscordRoles [svid]: Returns list of roles
- /GetDaysSinceLastMove [svid]: Returns an integer

## Group Routes

- /DoesGroupExist [svid]: Returns true or false
- /GetGroupMembers [svid]: Returns all member SVIDs, in a json list object
- /HasGroupPermission [svid, usersvid, permission]: Returns true or false
- /GetSVIDFromName [name]: Returns SVID
- /GetName [svid]: Returns name

## /Eco Routes

- /GetBalance [svid]: Returns decimal
- /SendTransactionByIDs [from, to, amount, auth, detail]: Returns a result. 'from' and 'to' are svids. Detail should include 'sale' if it is a sale.
- /GetStockValue [ticker]: Returns decimal
- /GetStockHistory [ticker, type, count, interval]: Returns list of stock history. Please do not use a count of over 60. Type can be "MINUTE", "HOUR", or "DAY".
- /SubmitStockBuy [ticker, count, price, accountid, auth]: Returns a result. Auth key must belong to accountid or have permission to it.
- /SubmitStockSell [ticker, count, price, accountid, auth]: Returns a result. Auth key must belong to accountid or have permission to it.
- /CancelOrder [orderid, accountid, auth]: Returns a result.
- /GetStockBuyPrice [ticker]: Returns decimal. Cheapest stock available for ticker.
- /GetQueueInfo [ticker, type]: Returns list of queue data. Type can be "BUY" or "SELL".
- /GetUserStockOffers [ticker, svid]: Returns list of stock offer data.
- /GetDistrictWealth [id]: Returns total wealth of a district
- /GetDistrictUserWealth [id]: Returns total user wealth of a district
- /GetDistrictGroupWealth [id]: Returns total group wealth of a district

## Oauth2

What is Oauth2?

- Oauth2 allows applications to verify and control accounts from another platform without ever sharing sensitive information.
How can I use Oauth2?
- SpookVooper is currently matching the standard Oauth configuration, although it is limited to only "code" response type and "authorization_code" grant type currently.
You can register apps at: <https://spookvooper.com/oauth2>

### Oauth2 Routes

- /Authorize [response_type, client_id, redirect_uri, scope, state]: Redirects back to 'redirect_uri' with a "code" and "state" parameter if successful
- /RequestToken [grant_type, code, redirect_uri, client_id, client_secret]: Returns a json object containing the token, expire time in seconds, and svid of the authorized user

### What are the scopes

Currently, the only scope is View. This will be extended to eco/plot/etc in the future.

This is currently new and may have bugs. Try not to bug me without specific issues.
