import footerResource from "./footer.resource";
import playerResource from "./player.resource";

// TODO Improve this ...
const resources = { 
        en:{
            translation:{
                ...playerResource.en.translation,
                ...footerResource.en.translation,
            }
        }
    }

export default resources