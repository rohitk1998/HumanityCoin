import { Empty } from 'antd';
import { useTranslation } from 'react-i18next';

const NoRecordTable = () => {
    const { t } = useTranslation();
    return (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={t("tables.nores")} />
    );
};

export default NoRecordTable;