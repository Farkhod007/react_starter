import React, { useState } from "react";
// import Typography from "./components/Typography";
import Ratio from "./components/Ratio";
import Picture from "./components/Picture";
import Image from "./components/Images";
import Modal from "./components/Modal";

import "./App.css";

const App = () => {

    const [isModalVisible, setIsModalVisible] = useState(false)

    const showModal = () => {
        setIsModalVisible(true)
    }

    const hideModal = () => {
        setIsModalVisible(false)
    }

    return (
        <div>
            <button onClick={showModal}>Show Modal</button>
            <Modal size={600} bgcolor={"#123456"} visible={isModalVisible} hide={hideModal} padding={30} color={'yellow'} border={5} align={'right'}  >
                <h1>Holle word </h1>
            </Modal>
            {/* <Typography variant="h1"> This is a heading one </Typography>{" "}
            <Typography variant="h2" color="papayawhip">
                This is a heading one{" "}
            </Typography>{" "}
            <Typography variant="bodyMedium" color="secondary">
                This is a heading one{" "}
            </Typography>{" "}
            <Typography variant="bodySmall" color="orange">
                This is a heading one{" "}
            </Typography>{" "}
            <Ratio ratio={16 / 9}>
                <Picture
                    data={[
                        {
                            src: "./images/3.jpg",
                            media: "(min-width: 900px)",
                        },
                        {
                            src: "./images/2.jpg",
                            media: "(min-width: 800px)",
                        },
                    ]}
                    fallback="./images/1.jpg"
                    alt="Alt text"
                    width="100%"
                    height="100%"
                />
            </Ratio>{" "} */}
        </div>
    );
};

export default App;
