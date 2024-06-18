
Introduction
-
We are working for a building leasing and marketing company, and have been tasked with researching the Commercial Building Disclosure project, which can benefit from data visualisation. 
Searchable with data, you can view a map as well as specific building metrics such as ratings, energy intensity, net lettable areas and more.
The data delivery is manual to up-date and requires processing to make easy to understand, this clearly shows the certified buildings and their ratings in an easy and visual way.

Background
-
A National Energy Efficiency Program
The Commercial Building Disclosure (CBD) Program is a national regulatory program that requires energy efficiency information to be provided in most cases when commercial office space of 1000 square metres or more is offered for sale or lease.

Purpose
-
The primary objective of this project is to perform a visualisation analysis of up to 40,000 ratings within Victoria using available data from the Australian Government site www.cbd.gov.au.

Ethics
-
The CBD Program is an example of transparency in data collection. This is an instance where you would want the data that has been collected to be shared. The data provided to clients allows them to make an informed choice regarding the energy efficiency of the building they would like to lease which could ultimately affect their fixed costs. 

The research questions
-
1. What locations in Victoria have the highest number of energy efficient buildings?
2. What is the correlation between annual emissions and office space?
3. What is the best method of visually displaying this data for use?
4. What are the ethical considerations when collecting and analysing this dataset?


Methods
-
- Imported data as csv, processed using ETL, and created dataframe
- Imported transformed data into Python and PostgresSQL in PGAdmin4
- Created JSON files and tables 
- Created Flask file and SQLite as an alternative to PostgresSQL
- Used JSON data to complete data visualisations in Jupyter Notebook and JS + HTML
- Used a new library: Plotly Express, for visualisations

Results
-
- Slide 18 - A bar chart representing the top ten suburbs in Victoria, that have the highest number of building certificates that achieve the highest rating in energy efficiency
- Slide 19 - A scatterplot that shows the relationship between suburbs and greenhouse gas emmissions
- Slide 20 - A map that displays the top twenty suburbs in Victoria with the highest energy emmissions
- Slide 21 - A bar chart displaying the top 20 suburbs with the highest average star ratings
- Slide 22 - A scatter plot displaying the annual energy consumption of a property in relation to the net lettable space of that property
- Slide 26 - A interactive map that displays all properties listed in the dataset by location

Limitations and future recommendations
-
- Using GitHub and branch for code revision management is of benefit, but has file limit <100mb. 
- Acquiring data from public sites can be “dirty” and require extensive clean up and testing for errors.
- Street Map will not load markers, using excess entries. 
- Generating JSON data within FLASK using the SQLite DB was difficult and as an alternative we used a static JSON data file exported from Python.
- Domain knowledge (or lack of time) can play a major role in DB backend & FLASK development, more time was needed to finish the FLASK (SQLite > JSON) back end creation.

Usage Instructions:
-
 Analysis
 -
 - ETL_Dataset.csv
 - buildings_schema.sql
 - buildings.json
 - buildings.sqlite
 - FullCSV_to_DataBase.ipynb
 - FullCSV_to_MapData.ipynb
 - Scatterplot.ipynb
 
 Dataset:
 -
 -  https://www.cbd.gov.au/sites/default/files/2024-05/Full%20CBD%20downloadable%20dataset.csv
 - https://www.cbd.gov.au/about-cbd-program/performance-program/download-cbd-program-data

Data Files
 -
- index.html
- map.js
- style.css
- app.py
- app.cpython-311.pyc

Credits
-
This code was compiled and written by Ben Mason, Archana Kale, Erin Nicol, and Violet Bui in the 2024 Data Analytics Boot Camp hosted by Monash University.
