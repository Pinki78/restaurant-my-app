import axios from "axios";
import { TeamData } from "../../api-data/team-data/team-data";

const PROJECT_ID = "restaurants-my-app"; // your project id
const COLLECTION = "team";

const FIRESTORE_URL = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/${COLLECTION}`;

const uploadTeamData = async () => {
  try {
    for (const team of TeamData) {
      await axios.post(FIRESTORE_URL, {
        fields: {
           id: { stringValue: team.id },
            title: { stringValue: team.title },
            role: { stringValue: team.role },
            teamImage: { stringValue: team.teamImage },
            info: { stringValue: team.info },
            caption: { stringValue: team.caption },
            facebook: { stringValue: team.facebook },
            twitter: { stringValue: team.twitter },
            instagram: { stringValue: team.instagram }
        }
      });
    }

    console.log("✅ Team data uploaded successfully");
  } catch (error) {
    console.error("❌ Upload failed:", error.response?.data || error);
  }
};

uploadTeamData();
