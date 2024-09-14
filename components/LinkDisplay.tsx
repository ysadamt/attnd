import QRCode from "react-qr-code";

const LinkDisplay = ({ link }: { link: string }) => {
    return (
        <div className="bg-white p-4">
            <QRCode
                size={256}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                value={link}
                viewBox={`0 0 256 256`}
            />
        </div>
    );
};

export default LinkDisplay;
