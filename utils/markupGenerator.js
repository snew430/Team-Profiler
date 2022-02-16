function markupGenerator(people) {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"/>
	<title>Team Profiler</title>
</head>
<body>
<header class="bg-info p-4 mb-5">
<h1 class="text-center text-white">My Team</h1>    
</header>
    <main class="d-flex justify-content-evenly">
	${people
    .filter(({ occupation }) => occupation === "Manager")
    .map((person) => {
      return `<div class="card" style="width: 18rem;">
      <div class="card-body bg-success bg-opacity-25">
        <h5 class="card-title text-center">${person.getName()}</h5>
        <p class="card-text text-center"><i class="bi bi-building"></i> ${person.getRole()}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item text-center">ID: ${person.getId()}</li>
        <li class="list-group-item text-center">Email: <a href="mailto:${person.getEmail()}">${person.getEmail()}</a></li>
        <li class="list-group-item text-center">Office Number: ${
          person.office
        }</li>
      </ul>
    </div>`;
    })}
    ${people
      .filter(({ occupation }) => occupation === "Engineer")
      .map((person) => {
        return `<div class="card" style="width: 18rem;">
        <div class="card-body bg-danger bg-opacity-25">
          <h5 class="card-title text-center">${person.getName()}</h5>
          <p class="card-text text-center"><i class="bi bi-tools"></i> ${person.getRole()}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item text-center">ID: ${person.getId()}</li>
          <li class="list-group-item text-center">Email: <a href="mailto:${person.getEmail()}">${person.getEmail()}</a></li>
          <li class="list-group-item text-center">GitHub: <a href="https://github.com/${
            person.github
          } target="_blank">${person.github}</a></li>
        </ul>
      </div>`;
      })}
    ${people
      .filter(({ occupation }) => occupation === "Intern")
      .map((person) => {
        return `<div class="card" style="width: 18rem;">
        <div class="card-body bg-primary bg-opacity-25">
          <h5 class="card-title text-center">${person.getName()}</h5>
          <p class="card-text text-center"><i class="bi bi-person-circle"></i> ${person.getRole()}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item text-center">ID: ${person.getId()}</li>
          <li class="list-group-item text-center">Email: <a href="mailto:${person.getEmail()}">${person.getEmail()}</a></li>
          <li class="list-group-item text-center">School: ${person.getSchool()}</li>
        </ul>
      </div>`;
      })}
      </main>
</body>
</html>`;
}

module.exports = markupGenerator;
