import React, { useEffect, useState } from "react";
import Styled from './styled-components';
import SendGoTop from "../SendGoTop"

const BackTop = (props) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 50) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
    }, []);


    return (
      <div>
          {isVisible && <Styled.BackTopButton onClick={scrollToTop}>
            <SendGoTop />
          </Styled.BackTopButton>}
      </div>
    )
}

export default BackTop;
