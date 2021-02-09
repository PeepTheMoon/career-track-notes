getwellnetwork:

data engineering is it's own special subset of engineering

a data lake is 

a data warehouse is more of a defined 

ETL extract transform load tools
Extract load and transform


enterprise data engineer
was hired as the data engineer, been at getwellnetwork since june.  
getwellnetwork has 4 products:
just bought dosint(sp?)- they do automated communicating for healthcare

they do a lot of work for kaiser
all of the communication about the covid vaccine
the
uses java, rails, python with javascript frontends.

trying to create a warehouse where they have info from all of their products flowing into one place.  Goal is to use kafka (a streaming data model using a publisher/subscriber model).

want to use this to integrate the products together to form a standard platform for all of them.  Want to take all of the data that comes through and use it for live reporting.  has been workingon the architecture piece already.  

does a lot of plumbing, trying to connect things together.  Maintains 2 production databases.

poc work?

sets up a lot of automation for reporting so that it runs every day at the same time, extracts it, transforms it, sends it to who needs it, etc.  It send you a message if it didn't work.

spends a lot of time working on the command line in linux.

what the company culture is like:
founder michael m? was going through cancer treatment and was upset about how hospitals work and the amount of time that gets wasted.  Decided to start this company to fix it.  Evangelist ceo, super positive.  thinks its an excellent company.  Treats employees well.  lots of good, relevant meetings.  things like virtual bookclubs and talent contests, etc.  leadership is going through the battles with you!  

company diversity
has a lot of female presence in leadership, but engineering male dominated.  has an active diversity policy.  thinks about how to be responsible corporate citizens.  

onboarding:
not a lot of onboarding, he was sort of thrown in.  a lot of undirected learning involved.  

for data engineer- reporting.  What are they looking for?
there's a data consumption side and the reporting side, they want to take that data and prepare it for the analytics team and maintain the infrascructure that the analytics team is using.  phi?  very rarely report on any phi (how do we get the data to the analytics team without any identifiers?  how to be obfuscate between the different products while still matching their identifiers when we need to rejoin the data later).  A lot of sql and performant sql involved.  How do you tune a query to be the best version of itself.  How do you write a transformation script to aggregate it into new versions?  Normalized databases: star schema- can shrink the size of databases by not storing the same data in several tables.  Using a lot of joins.  

fundamental understanding of data warehouses, data lakes, data marts, etc.  know pros and cons, know technologies used for each.

-what are ways in which I can prepare for applying for this position?
how data warehousing/lakes work and etl tools, etc.  and how they play in a professional setting.  ex want to know why the customers are using a product and why they're not.

  Data lakes and data warehouses are both widely used for storing big data, but they are not interchangeable terms. A data lake is a vast pool of raw data, the purpose for which is not yet defined. A data warehouse is a repository for structured, filtered data that has already been processed for a specific purpose.

  In computing, extract, transform, load (ETL) is the general procedure of copying data from one or more sources into a destination system which represents the data differently from the source(s) or in a different context than the source(s). The ETL process became a popular concept in the 1970s and is often used in data warehousing.
  
    Data extraction involves extracting data from homogeneous or heterogeneous sources; data transformation processes data by data cleaning and transforming them into a proper storage format/structure for the purposes of querying and analysis; finally, data loading describes the insertion of data into the final target database such as an operational data store, a data mart, data lake or a data warehouse.

    A properly designed ETL system extracts data from the source systems, enforces data quality and consistency standards, conforms data so that separate sources can be used together, and finally delivers data in a presentation-ready format so that application developers can build applications and end users can make decisions.

what is the interview process like?
his process was: tech screen(2nd, longest, take home), hr screen (first step, usually fast), org/culture convo.

don't publish them anywhere!  lol (sean will send me the one he got)

sql fiddle?  an online sqlfiddle.org can set up a database and run queries using different database platforms.  another is a python3 question.  
