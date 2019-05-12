# Philips Assignment
	
## Objective  
	
The Objective of this application is to create an application to capture the Food and Beverage preference that can be printed as a pdf file

## Prerequisites
 
1. Clone the boilerplate repository and cd into it  
2. Install dependencies `npm install`  
3. Run the backend `npm run serve`  which shall run on port:3000  
4. Run the frontend `npm run start` which shall run on port:4200  

## Know your server  

On running `npm run serve`, following apis would be available for your use -  
1. To authenticate user - POST - http://localhost:3000/auth/v1 - expecting data - { username, password }  
2. To check if user is authenticated - POST - http://localhost:3000/auth/v1/isAuthenticated - expecting header - { 'Authorization', `Bearer ${token}` }  


## Instructions:

1. Visit the URL http://localhost:4200
2. Use the user credentials shankar & password as password
3. Choose the food and beverage as preferred
4. Click on the "Capture F&B" to download
