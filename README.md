# Gaweku Test - News Website ( Next.js 13 )

This is an example of a simple website that uses the Gaweku News API. [Click here](https://github.com/DianP/gaweku-test-news-api/) to check the repo.
This project is built using [Next.js 13](https://nextjs.org/) app router, [TailwindCSS](https://tailwindcss.com).

> UI/UX Design for this project can be seen here
>
> [https://www.figma.com/file/a1if2QSl7TVSGixffhF0P6/Gaweku-Test-UI?type=design&node-id=0%3A1&mode=design&t=3uSxGly5adF5BusQ-1](https://www.figma.com/file/a1if2QSl7TVSGixffhF0P6/Gaweku-Test-UI?type=design&node-id=0%3A1&mode=design&t=3uSxGly5adF5BusQ-11)

## Requirements

| Name                                                              | Version  | Note     |
| ----------------------------------------------------------------- | -------- | -------- |
| Node                                                              | ^18.16.1 |          |
| NPM                                                               | ^9.5.1   |          |
| [Gaweku News API](https://github.com/DianP/gaweku-test-news-api/) | ^0.1.0   | Required |

### Other Dependencies

- WeatherAPI.com [https://www.weatherapi.com/]. Used for getting up to dated weather data.

## Installation

1. Clone this repository
2. Copy `.env.example` to `.env` and fill in the values
3. Install dependencies using `npm install`
4. Start the dev server by running `npm run dev`
5. To build the project, run `npm run build` and run the server using `npm start`

### .env Config Example

```
NEWS_API_URL='http://localhost:1337/api/v1/news'
WEATHERAPI_URL='https://api.weatherapi.com/v1'
WEATHERAPI_API_KEY=''
```

---

## Screenshots

![screencapture-gaweku-news-dt-vg-2023-07-03-11_30_09](https://github.com/DianP/gaweku-test-news-fe/assets/34946363/a69e09ae-0a37-4c46-a24a-49d1c2bcf534)