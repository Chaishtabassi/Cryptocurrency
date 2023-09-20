Firstly Make sure you have React Native and Node.js installed on your machine before proceeding.

Step 1: Create a New React Native Project:
npx react-native init "ProjectName".

Step 2: Install Required Dependencies
npm install axios
npm install react-navigation/native react-navigation/stack
npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/viewpager

Step 3: Set Up Navigation
Create a file called App.js in your project's root directory and set up basic navigation using React Navigation

Step 4: Create the Home Screen
Create a new file called HomeScreen.js in your project's root directory. This will be the main screen of your app where the cryptocurrency prices are displayed.

Step 5: API use
I use the coingeco API to fetch real-time price data for a predefined list of cryptocurrencies.

Step 5: Start the App
npx react-native run-android
or
npx react-native run-ios



