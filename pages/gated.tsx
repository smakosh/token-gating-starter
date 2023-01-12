import { GetServerSideProps, NextPage } from "next";
import getBalance from "../lib/getBalance";
import { unstable_getServerSession } from "next-auth";
import { getAuthOptions } from "./api/auth/[...nextauth]";
import { BigNumber } from "ethers";

const GatedPage: NextPage = () => {
  return <>Welcome, collector.</>;
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const address = await unstable_getServerSession(
    req,
    res,
    getAuthOptions(req)
  );

  if (!address?.user?.name) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }

  if (!process.env.NEXT_PUBLIC_CONTRACT_ADDRESS) {
    throw Error("Missing NEXT_PUBLIC_CONTRACT_ADDRESS env variable");
  }

  const balance = await getBalance(address.user.name, [
    process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
  ]);

  if (BigNumber.from(balance.tokenBalances[0].tokenBalance).lte(0)) {
    return {
      redirect: {
        permanent: false,
        destination: "/buy-nft", // Redirect if wallet does not have the required token
      },
    };
  }

  return {
    props: {},
  };
};

export default GatedPage;
