import { useDynamicSvgImport } from '../../hooks/useDynamicSvgImport';

interface IProps {
    iconName: string;
    wrapperStyle?: string;
    svgProp?: React.SVGProps<SVGSVGElement>;
}

function SvgIcon(props: IProps) {
    const { iconName, svgProp } = props;
    const { loading, SvgIcon } = useDynamicSvgImport(iconName);

    return (
        <>
            {loading && (
                <div className="rounded-full bg-slate-400 animate-pulse h-8 w-8"></div>
            )}
            {SvgIcon && (
                <SvgIcon {...svgProp} />
            )}
        </>
    );
}

export default SvgIcon;
