# Microservice containerization

## Node.js + Docker + PostgreSQL

## How to use

1. You can clone this repository to your local machine and then type:

```
$ docker-compose up --build
```
2. Go to your browser and then access the link:
```
http://localhost:8080
```

## Node version

I used an **old** version of Node so I could use a dated functionality that was removed on the latest versions[^1].

## Database

![postgresql](https://user-images.githubusercontent.com/97318219/153020600-4531ec89-9eac-4452-9a55-bb944344b443.png)

The data was stored on a PostgreSQL database[^2].

The admin page can be accessed going to this link:

```
http://localhost:16543/
```

## API call and endpoints

![Screenshot_2022-02-08_12-20-07](https://user-images.githubusercontent.com/97318219/153021159-278eeff8-4394-44d2-b8af-9499366010cd.png)

```
http://localhost:8080/employee
```
----

### Notes

[^1]: That's what happens when I try to use the lastest version of Node: ![error-version-npm](https://user-images.githubusercontent.com/97318219/153019490-91f5c767-4372-4748-96df-76669a3ac4d7.png)
[^2]: Inside the admin page: ![post](https://user-images.githubusercontent.com/97318219/153020765-80c7520f-11ba-4a7b-b9af-2782e32f7145.png)

