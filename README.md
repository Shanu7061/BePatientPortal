# MyCareHCL

Health Care Patient Portal

TechStacks:-
Front-End:- REACT 18, MUI, TypeScript(Optional), Redux-Toolkit, React Testing library
Back-End :- Node, Express, MongoDb
Use MongodB Atlas
CI-CD Deployment:- GitHub Actions, deploy on use ECS using Docker or EC2 instance, Use API gateway with WAF for route management,security

Use CloudWatch for logging and monitoring;

Key-Consideration:

1. Authentication and Authorization

   - Allow user to login and register through email and paasword or Some Outh Provider
   - We can use AWS cognito as an identity provider for the Authentication and Authorization which will provide proper JWT token
   - We can create roles in Cognito User Pool and User Group
   - For roles permission we will store that in our database
   - Use AWS API gateway to manage some securities related to Authenticatin and Authorization, like rate-limitting.

2. Securities
   -cors
   express-rate-limiting
   jwt token with access and refresh token
   user iput validation and sanitization
3. DataModelling:

---> Patient:{
id,name, age, gender,
}

--->Appointment:{
\_id,
date_an_time,
reason,
comment,
doctor,
patient,
}

--->roles:{
id,
name,
permissions---> array
}

--->
