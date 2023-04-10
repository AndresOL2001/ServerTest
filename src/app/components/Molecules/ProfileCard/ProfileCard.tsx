import Image from "next/image";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { UserInfo } from "../../typing";

const ProfileCard: React.FC<UserInfo> = (props: UserInfo) => {
  const { username, occupation } = props;

  return (
    <>
      <div className="flex items-center ml-4">
        <Image
          priority
          style={{
            borderRadius: 50,
            borderColor: "#ffff",
            borderWidth: 1,
          }}
          src={"/perfil.jpg"}
          height={40}
          width={40}
          alt=""
        ></Image>

        <div className="flex flex-col ml-3 ">
          <div className="text-light text-sm">
            Welcome, <span className="text-bold">{username}</span>
          </div>
          <div className="text-light font-light text-xs">{occupation}</div>
        </div>

        <IconButton aria-label="delete">
          <ExpandMoreIcon style={{ color: "white" }} />
        </IconButton>
      </div>
    </>
  );
};

export default ProfileCard;
