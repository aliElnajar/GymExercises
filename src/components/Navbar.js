import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";
const Navbar = () => {
  return (
    <Stack
      direction="row"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        px: "20px",
        alignItems: "center",
        justifyContent: { sm: "space-between", md: "flex-start" },
      }}
    >
      <Link to="/ ">
        <img
          src={Logo}
          alt="logo"
          style={{ width: "48px", height: "48px", margin: "0 20px" }}
        />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "3A1212",
            borderBottom: "1px solid #ff2625",
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{ textDecoration: "none", color: "3A1212" }}
        >
          exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
