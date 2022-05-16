import commonsResource from "./commons.resource";
import issueResource from "./issue.resource";
import footerResource from "./footer.resource";
import dashboardResource from "./dashboard.resource";

// TODO Improve this ...
const resources = { 
        en:{
            translation:{
                ...commonsResource.en.translation,
                ...issueResource.en.translation,
                ...footerResource.en.translation,
                ...dashboardResource.en.translation,
            }
        }
    }

export default resources