/* eslint-disable react/prop-types */
const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="md:w-4/12 mx-auto text-center mb-12 mt-20">
            <p className="text-[#D99904] mb-2">---{subHeading}---</p>
            <h3 className="text-4xl font-inter border-y-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;