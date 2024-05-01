import { Row, Col } from "react-bootstrap";
import FeaturesCard from "../components/FeaturesCard";
import TrackVisibility from "react-on-screen";
import { features } from "../constant";
import { Container, Wrapper, CardContainer } from "../components/FeaturesStyle";

export const Features = () => {
  return (
    <section className="features mt-16 pt-16" id="features">
      <Container id="features">
        <Col className="w-full">
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={isVisible ? "animate__animated animate__fadeIn" : ""}
              >
                <h2 className="pb-10 text-indigo-500 mt-4">
                  Share.Learn.Connect.
                </h2>
                <Wrapper className="mt-6 text-xl">
                  <CardContainer>
                    {features.map((feature) => (
                      <FeaturesCard feature={feature} />
                    ))}
                  </CardContainer>
                </Wrapper>
              </div>
            )}
          </TrackVisibility>
        </Col>
      </Container>
    </section>
  );
};
export default Features;
