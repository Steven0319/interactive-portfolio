import { dataPortfolio } from "../../data";
import AvatarPortfolio from "../../components/avatar-portfolio";
import CircleImage from "../../components/circle-image";
import TransitionPage from "../../components/transition-page";
import ContainerPage from "../../components/ContainerPage";
import PortfolioBox from "../../components/portfolio-box";

const PortfolioPage = () => {
  return (
    <ContainerPage>
      <TransitionPage />
      <AvatarPortfolio />
      <CircleImage />

      <div className="flex flex-col justify-center h-full">
        <h1 className="text-2xl text-center leading-tight md:text-4xl md:mb-5">
          My latest <span className="font-bold text-secondary">projects</span>
        </h1>

        <div
          className="relative z-10 grid gap-6 max-w-5xl mx-auto mt-4
                     sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
                     auto-rows-[300px]"
        >
          {dataPortfolio.map((data) => (
            <PortfolioBox key={data.id} data={data} />
          ))}
        </div>
      </div>
    </ContainerPage>
  );
};

export default PortfolioPage;
