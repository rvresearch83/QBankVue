import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';

// jhipster-needle-i18n-language-dayjs-imports - JHipster will import languages from dayjs here
import 'dayjs/locale/en';
import 'dayjs/locale/ar-ly';
import 'dayjs/locale/bn';
import 'dayjs/locale/zh-cn';
import 'dayjs/locale/nl';
import 'dayjs/locale/fr';
import 'dayjs/locale/de';
import 'dayjs/locale/hi';
import 'dayjs/locale/ja';
import 'dayjs/locale/ko';
import 'dayjs/locale/mr';
import 'dayjs/locale/pt';
import 'dayjs/locale/es';
import 'dayjs/locale/ta';
import 'dayjs/locale/te';

// DAYJS CONFIGURATION
dayjs.extend(customParseFormat);
dayjs.extend(duration);
dayjs.extend(relativeTime);
