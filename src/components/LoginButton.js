import { Button } from "@mui/material";
import { VpnKey, AccountCircle } from "@mui/icons-material";
import { useSession, signOut, signIn } from "next-auth/react";

export default function LoginButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <Button onClick={() => signOut()}>
        <AccountCircle
          htmlColor="#023047"
          sx={{ fontSize: "59px", alignSelf: "center", mt: "0px" }}
        />
      </Button>
    );
  }

  return (
    <Button onClick={() => signIn()}>
      <VpnKey
        htmlColor="#023047"
        sx={{ fontSize: "59px", alignSelf: "center", mt: "0px" }}
      />
    </Button>
  );
}
