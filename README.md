## Steps

- First run npm install on the root
- Create a .env and set the variables needed (take a look of .env.example to see which tokens are needed). NOTE: only the FACEBOOK_USER_TOKEN is being used atm
- Run npm run build
- Run npm run start will execute the code from main.ts

### Additional notes / thoughts

- If given more time, I would type things properly instead of using any, i.e. typing the returned information from Facebook API
- Used external libraries to handle throttling since it would be faster
- I decided to create a generic apiWrapper because in the future there may be other third party APIs that need throttling as well
- I used a typescript boiler template so I did not have to set it up from scratch
- Given more time, I would also set up a docker container for this project as well
