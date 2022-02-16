function markupGenerator(people) {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
	<title>Team Profiler</title>
</head>
<body>
	${people
    .filter(({ occupation }) => occupation === "Manager")
    .map(({ name, id, email, office }) => {
      return `<div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${id}</li>
        <li class="list-group-item">Email: ${email}</li>
        <li class="list-group-item">Office Number: ${office}</li>
      </ul>
    </div>;`;
    })}
    ${people
      .filter(({ occupation }) => occupation === "Engineer")
      .map(({ name, id, email, github }) => {
        return `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${id}</li>
          <li class="list-group-item">Email: ${email}</li>
          <li class="list-group-item">GitHub: ${github}</li>
        </ul>
      </div>;`;
      })}
    ${people
      .filter(({ occupation }) => occupation === "Intern")
      .map(({ name, id, email, school }) => {
        return `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${id}</li>
          <li class="list-group-item">Email: ${email}</li>
          <li class="list-group-item">School: ${school}</li>
        </ul>
      </div>;`;
      })}
</body>
</html>`;
}

module.exports = markupGenerator;
