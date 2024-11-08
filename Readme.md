{
	"info": {
		"_postman_id": "925d8c03-4dc7-4a02-808c-3f5032d0f951",
		"name": "BlogBackend",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "39588880"
	},
	"item": [
		{
			"name": "New Request",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "https://blogbackend-lr56.onrender.com/api/User",
					"protocol": "https",
					"host": [
						"blogbackend-lr56",
						"onrender",
						"com"
					],
					"path": [
						"api",
						"User"
					]
				}
			},
			"response": []
		},
		{
			"name": "https://blogbackend-lr56.onrender.com/api/user",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"name\":\"sagar\",\r\n    \"email\":\"sagar@gmail.com\",\r\n    \"password\":\"1234\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "https://blogbackend-lr56.onrender.com/api/user",
					"protocol": "https",
					"host": [
						"blogbackend-lr56",
						"onrender",
						"com"
					],
					"path": [
						"api",
						"user"
					]
				}
			},
			"response": []
		},
		{
			"name": "https://blogbackend-lr56.onrender.com/api/User",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"title\": \"Anime\",\r\n    \"content\":\"japanese animation\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "https://blogbackend-lr56.onrender.com/api/User",
					"protocol": "https",
					"host": [
						"blogbackend-lr56",
						"onrender",
						"com"
					],
					"path": [
						"api",
						"User"
					]
				}
			},
			"response": []
		}
	]
}
