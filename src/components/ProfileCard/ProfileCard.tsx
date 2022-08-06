import {
  Avatar,
  Button,
  Center,
  Flex,
  Heading,
  List,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import Wrapper from "../Wrapper";
import axios from "../../utils/axios";
import useIsLoggedIn from "../../utils/requestUtils/isLoggedIn";
import { useRouter } from "next/router";
import { EditIcon } from "@chakra-ui/icons";
import ModalSigninForm from "../Forms/ModalSigninForm";
import ModalEditTextForm from "../Forms/ModalEditTextForm";
import Link from "next/link";
import addFollow from "../../utils/requestUtils/addFollow";
import CardInfoSwitcher from "./CardInfoSwitcher";
import ProfileCardBody from "./ProfileCardBody";

type Props = {
  userName: string;
  bio: string;
  userBlogList?: any[];
  userFollowingList?: any[];
  loggedInUserName?: string | null;
  followingUser: boolean;
};

ProfileCard.defaultProps = {
  userName: "Default User",
  bio: "Default bio",
  loggedInUserName: null,
  followingUser: false,
};

const headerOptions = ["Overview", "Blogs", "Follows"];

export default function ProfileCard({
  userName,
  bio,
  userBlogList,
  loggedInUserName,
  followingUser,
  userFollowingList,
}: Props) {
  const [isFollowing, setIsFollowing] = React.useState(followingUser);
  //const { isLoading, data, error } = useIsLoggedIn();
  const [currInfoOpt, setCurrInfoOpt] = React.useState(0);
  return (
    <Flex
      m="auto"
      flexDir={"column"}
      boxShadow={"2xl"}
      w={"50%"}
      h={"100%"}
      alignItems={"center"}
      justifyContent={"space-around"}
      py={"25px"}
    >
      <Flex flexDir={"column"} alignItems={"center"}>
        <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
        <Heading>{userName}</Heading>
        {loggedInUserName}
        {loggedInUserName && (
          <Button
            onClick={() => {
              addFollow(userName);
            }}
          >
            Follow User
          </Button>
        )}
        <CardInfoSwitcher
          currentOptNum={currInfoOpt}
          setOptNum={setCurrInfoOpt}
        />
      </Flex>

      <List w={"50%"} h={"80%"}>
        <ListItem>
          <Flex
            border={"1px solid grey"}
            pos={"relative"}
            borderRadius={"5px"}
            h="100px"
          >
            <Text>{bio}</Text>
          </Flex>
          <Button
            onClick={() => {
              addFollow(userName);
            }}
          >
            Send Friend Request
          </Button>
        </ListItem>

        <ListItem>
          <List>
            {(headerOptions[currInfoOpt] === "Blogs" ||
              headerOptions[currInfoOpt] === "Overview") &&
              userBlogList.slice(0, 5).map((blog: any, index: number) => (
                <ListItem key={`blogItemNumber${index}`}>
                  <Link
                    key={`blogItemLink${index}`}
                    href={`/blogview/${blog.id}`}
                  >
                    <Text key={`blogItemTitle${index}`} textAlign="center">
                      {blog.title}
                    </Text>
                  </Link>
                </ListItem>
              ))}
            {headerOptions[currInfoOpt] === "Follows" &&
              userFollowingList
                .slice(0, 5)
                .map((follow: any, index: number) => (
                  <ListItem key={`followItemNumber${index}`}>
                    <Link
                      key={`followItemLink${index}`}
                      //Trying to see why the new profile isn't loading properly
                      href={`http://localhost:3031/profile/${follow.followingId}`}
                      //href={`http://localhost:3031`}
                    >
                      <a>
                        <Text
                          onClick={() => {}}
                          key={`followItemTitle${index}`}
                          textAlign="center"
                        >
                          {`${follow.followingId} since ${follow.followedAt}`}
                        </Text>
                      </a>
                    </Link>
                  </ListItem>
                ))}
          </List>
        </ListItem>
      </List>
      <ProfileCardBody bodyType={headerOptions[currInfoOpt]} />
    </Flex>
  );
}
