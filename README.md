# ob-intro
Worked test for One Balance recruitment process. 

## Elements
- Blog Post: see [./docs/blog-post.md](docs/blog-post.md)
- App: this is done in two parts: 
  - An Express service app which handles the calls to the OneBalance API [here](./ob-backend/README.md)
  - A React app which acts as a UI for this, [here](./ob-client/README.md). 
- There are also some implementation notes in the [./docs/notes.md](./docs/notes.md) file.  


## Folder structure

### ob-backend
The `ob-backend` folder contains the backend application for the One Balance project. This application is mainly a pass-through for the OneBalance API, which allows for fine-grained control of testing and error handling. 

### ob-client
The `ob-client` folder contains the frontend application for the One Balance project. This application is built using React, and borrows heavily from the sample repo at [http://github.com/OneBalance-io/integration-examples]().  

## Documentation

### docs
The `docs` folder contains documentation related to the project. This includes a blog post in markdown format, and notes from the development process.

## Installation

### Set up environment variables in config files.
- Copy the .env.example file in ob-backend to .env.local
- Copy the .env.example file in ob-client to .env.local
- Configure the API key in these files to reflect your OneBalance API key

- run npm install in the ob-backend directory
- run npm install in the ob-client directory
Alternatively, run the setup.sh file in the root directory to run both these commands


