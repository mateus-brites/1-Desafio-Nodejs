const express = require("express");
const cors = require("cors");

const { v4: uuid, validate: isUuid } = require('uuid');

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];


app.get("/repositories", (request, response) => {
  return response.json(repositories);
});

app.post("/repositories", (request, response) => {
  const id = uuid();
  const { title, url, techs } = request.body;
  repositorie = {
    id,
    title,
    url,
    techs,
    likes: 0,
  };

  repositories.push(repositorie);

  return response.json(repositorie);
});

app.put("/repositories/:id", (request, response) => {
  const { id } = request.params;
  const { title, url, techs} = request.body;

  const repositoryIndex = repositories.findIndex(rep => id === rep.id);

  if(repositoryIndex < 0){
    return response.status(400).json("this id does not exist");
  };
  
  const updateRepositorie = {
    id,
    title,
    url,
    techs,
    likes: repositories[repositoryIndex].likes,
  };

  repositories[repositoryIndex] = updateRepositorie;

  return response.json(updateRepositorie);
  
});

app.delete("/repositories/:id", (request, response) => {
  const { id } = request.params;
  const repositoryIndex = repositories.findIndex(rep => id === rep.id);

  if(repositoryIndex < 0){
    return response.status(400).json("this id does not exist");
  };

  repositories.splice(repositoryIndex, 1);
  
  return response.status(204).send();
});

app.post("/repositories/:id/like", (request, response) => {
  const { id } = request.params;
  const repositoryIndex = repositories.findIndex(rep => id === rep.id);

  if(repositoryIndex < 0){
    return response.status(400).json("this id does not exist");
  };

  repositories[repositoryIndex].likes ++;
  
  return response.json(repositories[repositoryIndex]);

});

module.exports = app;
