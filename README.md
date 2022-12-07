# Class Route Tester
Database Debugging Commands
We have a series of commands for you to test the database locally.
- Help  
    **yarn api --help**
![List of commands](https://www.dropbox.com/s/pv45cxr9yy5ra77/Screen%20Shot%202022-10-27%20at%2011.35.15.png?raw=1)

- Create the database file (will delete the original database file if exist)  
    **yarn api init-db**

- Print the records in the database  
    **yarn api print-db  
    yarn api print-db --size 100**


- Add data record to the database  
    **yarn api add-data**
![Complete cycle](https://www.dropbox.com/s/1isr21lohpuvrdv/Screen%20Shot%202022-10-27%20at%2011.36.53.png?raw=1)
  
# Backend/APIs
- **class_route_api/class_route_core/transcription_API.py**  
    Placeholder for future Video-to-text transcription API  
- **class_route_api/class_route_core/core_alg.py**  
    The machine-learning translation model  

- **alg/gcheck:** Placeholder for future grammar check API. Takes in a string as input. Currently returns a dummy data.  
![grammar response](https://user-images.githubusercontent.com/45088995/206304630-ca38881a-92ad-4494-978d-76526b9d50ef.PNG)  

- **alg/translate:** Calls on core_alg. Takes in a string(in English) as input. Currently returns(in Mandarin) a dummy data.  
![translate response](https://user-images.githubusercontent.com/45088995/206304812-b9dda8b6-922a-412e-a5ba-a635d4c582ee.PNG)  

- **reports/store:** Stores report into database. Takes in a topic(string), phase(int, 1-4), rating(int, 1-5), and details(string, optional).
![store t1 response](https://user-images.githubusercontent.com/45088995/206305268-7a3c90d9-e176-43ea-95ff-a62260e5e7b2.PNG)  

- **reports/request:** Retrieves reports from database. Takes in a list of topics, phases, and ratings as filters.
![Capture](https://user-images.githubusercontent.com/45088995/206306693-40c65c56-5f37-4485-8ddd-e39cc33f832d.PNG)  

- **tlist:** Returns all distinct topics stored in database.
 ![Capture](https://user-images.githubusercontent.com/45088995/206307412-bc6f126f-4f73-4abf-9910-f1ee9e4b6d9d.PNG)
