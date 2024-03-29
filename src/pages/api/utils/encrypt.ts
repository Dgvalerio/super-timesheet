import { timesheet } from '@/services/timesheet/service';
import { Timesheet } from '@/services/timesheet/types';
import { ApiRoute } from '@/utils/routes';

const handler: ApiRoute<Timesheet.CryptoHash, { text: string }> = async (
  req,
  res
) => {
  switch (req.method) {
    case 'POST':
      try {
        const encrypted = await timesheet.encryptPassword(req.body.text);

        res.status(200).json(encrypted);
      } catch (e) {
        res.status(500).json({ message: `${JSON.stringify(e)}` });
      }
      break;
    default:
      res.status(500).json({ message: 'Esse método não foi implementado!' });
      break;
  }
};

export default handler;
