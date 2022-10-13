import {
    BottomNavigation,
    BottomNavigationAction,
    Button,
    Container,
    Grid,
    Step,
    StepLabel,
    Stepper
} from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const App = () => {
    return (
        <div style={{width: "100vw", height: "100vh", position: "fixed", display: "flex", flexDirection: "column"}}>

            <Stepper  activeStep={1} alternativeLabel style={{maxWidth: "100vw", overflowX: "scroll",height: "fit-content",}}>
                {["paso1", "paso2", "paso3", "paso4", "paso5", "paso5","paso5","paso5","paso5","paso5","paso1", "paso2", "paso3", "paso4", "paso5", "paso5","paso5","paso5","paso5","paso5"].map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>

            <Container maxWidth={"lg"} style={{height: "calc(100% - 56px)", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", overflowX: "hidden", overflowY: "scroll"}} sx={{padding: "1rem"}}>
                <h1>Facilito</h1>

                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>        <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>        <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>        <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>        <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>        <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>        <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>        <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>        <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>        <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>        <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
            </Container>

            <BottomNavigation style={{position: "relative", bottom: 0, width: "100%"}}>
                <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
            </BottomNavigation>
        </div>

    );
};

export default App;
