const table = document.getElementById("table");
const fileUploader = document.querySelector("#myfiles");

fileUploader.setAttribute("hidden", true);

const search = () => {
    const filter = myInput.value.toLowerCase();
    const rows = table.querySelectorAll("tr");
    rows.forEach(row => {
        const nested = row.querySelectorAll("td");
        const [columnA, columnB] = (nested.length === 2) ? [nested[0].textContent, nested[1].textContent] : ["", ""];
								// set search column
        const result = columnA.toLowerCase();
        row.style.display = (result.indexOf(filter) > -1) ? "" : "none";
    });
}

const checkTable = () => {
    const el = document.querySelector("[data-toggle]");
    if (el.hasAttribute("data-active")) {
        el.textContent = "";
        const fragment = document.getElementById("table-reset");
        const instance = document.importNode(fragment.content, true);
        el.appendChild(instance);
    } else el.setAttribute("data-active", true);
}

const pullfiles = function() {
    const fileInput = fileUploader;
    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.onload = function(evt) {
        handleJSON(evt.target.result);
    };
    reader.readAsText(file);
}

function handleJSON(objectArray) {
    checkTable();
    const abbr_enabled = false;
    const sections = JSON.parse(objectArray);
    const fragment = document.getElementById("table-row-template");
    sections.forEach(section => {
        section.items.forEach(item => {
            const instance = document.importNode(fragment.content, true);
            if (item === section.items[0])
                instance.querySelector(".name").classList = "name lead";
            // enable html abbreviation tags
            if (abbr_enabled) {
                instance.querySelector(".abbr").textContent = item.name;
                instance.querySelector(".abbr").title = item.desc;
                instance.querySelector(".abbr").title = item.desc;
            } else
                instance.querySelector(".name").textContent = item.name;
            instance.querySelector(".desc").textContent = item.desc;
            instance.querySelector(".desc2").textContent = item.desc;
            table.appendChild(instance);
        });
    });
}

fileUploader.onchange = pullfiles;



/* JSON TEMPLATE
[{
	"name": "section-name",
	"items": [{
		"name": "item-name",
		"desc": "description"
	}]
}]
*/



/* DEFAULT TABLE DATA - (The majority of this data was sourced from https://en.wikipedia.org/w/index.php?title=List_of_computing_and_IT_abbreviations&oldid=907152883) */
handleJSON(`[{"name":"0–9","items":[{"name":"1GL","desc":"hah","desc2":"xia"},{"name":"2","desc":"2","desc2":"xi2a"}
]}]`);

