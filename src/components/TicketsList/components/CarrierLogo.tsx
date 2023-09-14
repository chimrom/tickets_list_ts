import { FC } from 'react';
import S7 from '../../../assets/S7_new_logo.png';
import SU from '../../../assets/su-airlines_f124b4.png';
import TLV from '../../../assets/tlv.png';
import TK from '../../../assets/Turkish.png';
import BA from '../../../assets/British-Airways-Logo.png';

export const CarrierLogo: FC<{ carrier: string }> = ({ carrier }) => {
	let Logo = null;

	switch (carrier) {
		case 'TK':
			Logo = TK;
			break;

		case 'TLV':
			Logo = TLV;
			break;

		case 'SU':
			Logo = SU;
			break;
		case 'S7':
			Logo = S7;
			break;
		case 'BA':
			Logo = BA;
			break;

		default:
			Logo = null;
			break;
	}
	return (
		<img
			src={Logo ? Logo : ''}
			alt={carrier}
			className="w-20 sm:w-48 md:w-64 lg:w-96 h-24 object-contain"
		/>
	);
};
