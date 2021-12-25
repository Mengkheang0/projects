const projects = document.getElementById('projects');


GetGithubProject();
async function GetGithubProject()
{
    var endPoint = "https://api.github.com/users/Mengkheang0";
    const pos = await fetch(endPoint);

    if(pos.status == 200)
    {
        const json = await pos.json();
        const pos2 = await fetch(json.repos_url);

        const json2 = await pos2.json();

        CreateProject(json2);

    }else{
        console.log("Sorry, api is error");
    }

}


function CreateProject(listofRepos)
{
    listofRepos.forEach(element => {
        
        var card = document.createElement('div');
        card.innerHTML =
        `
        <div class="card shadow m-2" style="width: 18rem; height:420px">
            <img class="card-img-top " src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://file-uploads.teachablecdn.com/14d815e3f6cc414b9677f2a2a61634f1/d535e34b78e8498b839bfedb6e8c9749" alt="Card image cap">
            <div class="card-body" style="overflow-y: none !important;">
                <h5 class="card-title fw-bold mb-2">${element.name}</h5>
                <p class="card-text fw-300" style=" font-family: 'Work Sans', sans-serif;">${element.description}</p>
                <a href="${element.html_url}" class="btn btn-primary">Code</a>
            </div>
        </div>

        `;

        projects.appendChild(card);

    });
}