/*#########################################################################
#                                                                         #
#   Simple script shamelessly recopied from:                              #
#                                                                         #
#   Copyright                                                             #
#                                                                         #               
#   (C)  2013 Boubakr NOUR <n.boubakr@gmail.com>                          #
#   (C)  2009, 2010 Amine Roukh <amineroukh@gmail.com>                    #
#   (C)  2009 Àlvar Cuevas i Fajardo <alvar@cuevas.cat>                   #
#   (C)  2008 Eirik Johansen Bjørgan  <eirikjbj@gmail.com>                #
#   (C)  2008 Peter ZHOU <peterzhoulei@gmail.com>                         #
#   (C)  2008 Mark Kretschmann <kretschmann@kde.org>                      #
#   (C)  2007, 2008 Nikolaj Hald Nielsen <nhnFreespirit@gmail.com>        #
#                                                                         #
#   This program is free software; you can redistribute it and/or modify  #
#   it under the terms of the GNU General Public License as published by  #
#   the Free Software Foundation; either version 2 of the License, or     #
#   (at your option) any later version.                                   #
#                                                                         #
#   This program is distributed in the hope that it will be useful,       #
#   but WITHOUT ANY WARRANTY; without even the implied warranty of        #
#   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the         #
#   GNU General Public License for more details.                          #
#                                                                         #
#   You should have received a copy of the GNU General Public License     #
#   along with this program; if not, write to the                         #
#   Free Software Foundation, Inc.,                                       #
#   51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.         #
##########################################################################*/


Importer.loadQtBinding("qt.core");
Importer.loadQtBinding("qt.gui");

function Station(name, url, description) {
    this.name = name;
    this.url = url;
    this.description = description;
}

surat = new Array(
    "سورة الفاتحة",
    "سورة البقرة",
    "سورة آل عمران",
    "سورة النساء",
    "سورة المائدة",
    "سورة الأنعام",
    "سورة الأعراف",
    "سورة الأنفال",
    "سورة التوبة",
    "سورة يونس",
    "سورة هود",
    "سورة يوسف",
    "سورة الرعد",
    "سورة إبراهيم",
    "سورة الحجر",
    "سورة النحل",
    "سورة الإسراء",
    "سورة الكهف",
    "سورة مريم",
    "سورة طه",
    "سورة الأنبياء",
    "سورة الحج",
    "سورة المؤمنون",
    "سورة النور",
    "سورة الفرقان",
    "سورة الشعراء",
    "سورة النمل",
    "سورة القصص",
    "سورة العنكبوت",
    "سورة الروم",
    "سورة لقمان",
    "سورة السجدة",
    "سورة الأحزاب",
    "سورة سبأ",
    "سورة فاطر",
    "سورة يس",
    "سورة الصافات",
    "سورة ص",
    "سورة الزمر",
    "سورة غافر",
    "سورة فصلت",
    "سورة الشورى",
    "سورة الزخرف",
    "سورة الدخان",
    "سورة الجاثية",
    "سورة الأحقاف",
    "سورة محمد",
    "سورة الفتح",
    "سورة الحجرات",
    "سورة ق",
    "سورة الذاريات",
    "سورة الطور",
    "سورة النجم",
    "سورة القمر",
    "سورة الرحمن",
    "سورة الواقعة",
    "سورة الحديد",
    "سورة المجادلة",
    "سورة الحشر",
    "سورة الممتحنة",
    "سورة الصف",
    "سورة الجمعة",
    "سورة المنافقون",
    "سورة التغابن",
    "سورة الطلاق",
    "سورة التحريم",
    "سورة الملك",
    "سورة القلم",
    "سورة الحاقة",
    "سورة المعارج",
    "سورة نوح",
    "سورة الجن",
    "سورة المزمل",
    "سورة المدثر",
    "سورة القيامة",
    "سورة الإنسان",
    "سورة المرسلات",
    "سورة النبأ",
    "سورة النازعات",
    "سورة عبس",
    "سورة التكوير",
    "سورة الإنفطار",
    "سورة المطففين",
    "سورة الإنشقاق",
    "سورة البروج",
    "سورة الطارق",
    "سورة الأعلى",
    "سورة الغاشية",
    "سورة الفجر",
    "سورة البلد",
    "سورة الشمس",
    "سورة الليل",
    "سورة الضحى",
    "سورة الشرح",
    "سورة التين",
    "سورة العلق",
    "سورة القدر",
    "سورة البينة",
    "سورة الزلزلة",
    "سورة العاديات",
    "سورة القارعة",
    "سورة التكاثر",
    "سورة العصر",
    "سورة الهمزة",
    "سورة الفيل",
    "سورة قريش",
    "سورة الماعون",
    "سورة الكوثر",
    "سورة الكافرون",
    "سورة النصر",
    "سورة المسد",
    "سورة الإخلاص",
    "سورة الفلق",
    "سورة الناس"
);

suratID = new Array("001", "002", "003", "004", "005", "006", "007", "008", "009", "010",
                    "011", "012", "013", "014", "015", "016", "017", "018", "019", "020",
                    "021", "022", "023", "024", "025", "026", "027", "028", "029", "030",
                    "031", "032", "033", "034", "035", "036", "037", "038", "039", "040",
                    "041", "042", "043", "044", "045", "046", "047", "048", "049", "050",
                    "051", "052", "053", "054", "055", "056", "057", "058", "059", "060",
                    "061", "062", "063", "064", "065", "066", "067", "068", "069", "070",
                    "071", "072", "073", "074", "075", "076", "077", "078", "079", "080",
                    "081", "082", "083", "084", "085", "086", "087", "088", "089", "090",
                    "091", "092", "093", "094", "095", "096", "097", "098", "099", "100",
                    "101", "102", "103", "104", "105", "106", "107", "108", "109", "110",
                    "111", "112", "113", "114"
                    );

categories = new Object;

function createCategory(name, url, mimtype) {
    
    if (mimtype === undefined) {
        mimtype = "mp3";
    }
    
    cat = new Array();
    
    for(var i = 0; i < 114; i++) {
        cat[i] = new Station(suratID[i] + " - " + surat[i], url + suratID[i] + "." + mimtype, surat[i]);
    }
    
    categories[name]= cat;
}

// Complete Qur'an
createCategory("القارئ أبو بكر الشاطري | حفص عن عاصم", "http://server11.mp3quran.net/shatri/");
createCategory("القارئ أحمد الحواشي | حفص عن عاصم", "http://server11.mp3quran.net/hawashi/");
createCategory("القارئ أحمد الطرابلسي | حفص عن عاصم", "http://server10.mp3quran.net/trabulsi/");
createCategory("القارئ أحمد بن علي العجمي | حفص عن عاصم", "http://server10.mp3quran.net/ajm/64/");
createCategory("القارئ أحمد صابر | حفص عن عاصم", "http://server8.mp3quran.net/saber/");
createCategory("القارئ أحمد عامر | حفص عن عاصم", "http://server10.mp3quran.net/Aamer/");
createCategory("القارئ أحمد نعينع | حفص عن عاصم", "http://server11.mp3quran.net/ahmad_nu/");
createCategory("القارئ أكرم العلاقمي | حفص عن عاصم", "http://server9.mp3quran.net/akrm/");
createCategory("القارئ إبراهيم الأخضر | حفص عن عاصم", "http://server6.mp3quran.net/akdr/");
createCategory("القارئ الزين محمد أحمد | حفص عن عاصم", "http://server9.mp3quran.net/alzain/");
createCategory("القارئ توفيق الصايغ | حفص عن عاصم", "http://server6.mp3quran.net/twfeeq/");
createCategory("القارئ جمال شاكر عبدالله | حفص عن عاصم", "http://server6.mp3quran.net/jamal/");
createCategory("القارئ جمعان العصيمي | حفص عن عاصم", "http://server6.mp3quran.net/jaman/");
createCategory("القارئ خالد القحطاني | حفص عن عاصم", "http://server10.mp3quran.net/qht/");
createCategory("القارئ خالد المهنا | حفص عن عاصم", "http://server11.mp3quran.net/mohna/");
createCategory("القارئ خالد عبدالكافي | حفص عن عاصم", "http://server11.mp3quran.net/kafi/");
createCategory("القارئ خليفة الطنيجي | حفص عن عاصم", "http://server12.mp3quran.net/tnjy/");
createCategory("القارئ زكي داغستاني | حفص عن عاصم", "http://server9.mp3quran.net/zaki/");
createCategory("القارئ سعد الغامدي | حفص عن عاصم", "http://server7.mp3quran.net/s_gmd/");
createCategory("القارئ سعود الشريم | حفص عن عاصم", "http://server7.mp3quran.net/shur/");
createCategory("القارئ سهل ياسين | حفص عن عاصم", "http://server6.mp3quran.net/shl/");
createCategory("القارئ سيد رمضان | حفص عن عاصم", "http://server12.mp3quran.net/sayed/");
createCategory("القارئ شيرزاد عبدالرحمن طاهر | حفص عن عاصم", "http://server12.mp3quran.net/taher/");
createCategory("القارئ صابر عبدالحكم | حفص عن عاصم", "http://server12.mp3quran.net/hkm/");
createCategory("القارئ صلاح البدير | حفص عن عاصم", "http://server6.mp3quran.net/s_bud/");
createCategory("القارئ صلاح الهاشم | حفص عن عاصم", "http://server12.mp3quran.net/salah_hashim_m/");
createCategory("القارئ صلاح بو خاطر | حفص عن عاصم", "http://server8.mp3quran.net/bu_khtr/");
createCategory("القارئ عادل الكلباني | حفص عن عاصم", "http://server8.mp3quran.net/a_klb/");
createCategory("القارئ عادل ريان | حفص عن عاصم", "http://server8.mp3quran.net/ryan/");
createCategory("القارئ عبدالبارئ الثبيتي | حفص عن عاصم", "http://server6.mp3quran.net/thubti/");
createCategory("القارئ عبدالبارئ محمد | حفص عن عاصم", "http://server12.mp3quran.net/bari/");
createCategory("القارئ عبدالباسط عبدالصمد | حفص عن عاصم", "http://server7.mp3quran.net/basit/");
createCategory("القارئ عبدالرحمن السديس | حفص عن عاصم", "http://server11.mp3quran.net/sds/");
createCategory("القارئ عبدالعزيز الأحمد | حفص عن عاصم", "http://server11.mp3quran.net/a_ahmed/");
createCategory("القارئ عبدالله الكندري | حفص عن عاصم", "http://server10.mp3quran.net/Abdullahk/");
createCategory("القارئ عبدالله المطرود | حفص عن عاصم", "http://server8.mp3quran.net/mtrod/");
createCategory("القارئ عبدالله بصفر | حفص عن عاصم", "http://server6.mp3quran.net/bsfr/");
createCategory("القارئ عبدالله خياط | حفص عن عاصم", "http://server12.mp3quran.net/kyat/");
createCategory("القارئ عبدالله عواد الجهني | حفص عن عاصم", "http://server13.mp3quran.net/jhn/");
createCategory("القارئ عبدالمحسن الحارثي | حفص عن عاصم", "http://server6.mp3quran.net/mohsin_harthi/");
createCategory("القارئ عبدالمحسن العبيكان | حفص عن عاصم", "http://server12.mp3quran.net/obk/");
createCategory("القارئ عبدالمحسن القاسم | حفص عن عاصم", "http://server8.mp3quran.net/qasm/");
createCategory("القارئ عبدالهادي أحمد كناكري | حفص عن عاصم", "http://server6.mp3quran.net/kanakeri/");
createCategory("القارئ عبدالودود حنيف | حفص عن عاصم", "http://server8.mp3quran.net/wdod/");
createCategory("القارئ علي بن عبدالرحمن الحذيفي | حفص عن عاصم", "http://server9.mp3quran.net/hthfi/");
createCategory("القارئ علي حجاج السويسي | حفص عن عاصم", "http://server9.mp3quran.net/hajjaj/");
createCategory("القارئ عماد زهير حافظ | حفص عن عاصم", "http://server6.mp3quran.net/hafz/");
createCategory("القارئ فارس عباد | حفص عن عاصم", "http://server8.mp3quran.net/frs_a/");
createCategory("القارئ ماهر المعيقلي | حفص عن عاصم", "http://server12.mp3quran.net/maher/");
createCategory("القارئ ماهر شخاشيرو | حفص عن عاصم", "http://server10.mp3quran.net/shaksh/");
createCategory("القارئ محمد أيوب | حفص عن عاصم", "http://server8.mp3quran.net/ayyub/");
createCategory("القارئ محمد الطبلاوي | حفص عن عاصم", "http://server12.mp3quran.net/tblawi/");
createCategory("القارئ محمد المحيسني | حفص عن عاصم", "http://server11.mp3quran.net/mhsny/");
createCategory("القارئ محمد جبريل | حفص عن عاصم", "http://server8.mp3quran.net/jbrl/");
createCategory("القارئ محمد رشاد الشريف | حفص عن عاصم", "http://server10.mp3quran.net/rashad/");
createCategory("القارئ محمد صالح عالم شاه | حفص عن عاصم", "http://server12.mp3quran.net/shah/");
createCategory("القارئ محمد صديق المنشاوي | حفص عن عاصم", "http://server10.mp3quran.net/minsh/");
createCategory("القارئ محمد عبدالكريم | حفص عن عاصم", "http://server12.mp3quran.net/m_krm/");
createCategory("القارئ محمد عثمان خان | حفص عن عاصم", "http://server6.mp3quran.net/khan/");
createCategory("القارئ محمود الرفاعي | حفص عن عاصم", "http://server11.mp3quran.net/mrifai/");
createCategory("القارئ محمود خليل الحصري | حفص عن عاصم", "http://server13.mp3quran.net/husr/");
createCategory("القارئ محمود علي البنا | حفص عن عاصم", "http://server8.mp3quran.net/bna/");
createCategory("القارئ مشاري العفاسي | حفص عن عاصم", "http://server8.mp3quran.net/afs/");
createCategory("القارئ مصطفى إسماعيل | حفص عن عاصم", "http://server8.mp3quran.net/mustafa/");
createCategory("القارئ مصطفى اللاهوني | حفص عن عاصم", "http://server6.mp3quran.net/lahoni/");
createCategory("القارئ مصطفى رعد العزاوي | حفص عن عاصم", "http://server8.mp3quran.net/ra3ad/");
createCategory("القارئ معيض الحارثي | حفص عن عاصم", "http://server8.mp3quran.net/harthi/");
createCategory("القارئ مفتاح السلطني | حفص عن عاصم", "http://server10.mp3quran.net/muftah/");
createCategory("القارئ موسى بلال | حفص عن عاصم", "http://server11.mp3quran.net/bilal/");
createCategory("القارئ ناصر القطامي | حفص عن عاصم", "http://server6.mp3quran.net/qtm/");
createCategory("القارئ نبيل الرفاعي | حفص عن عاصم", "http://server9.mp3quran.net/nabil/");
createCategory("القارئ نعمة الحسان | حفص عن عاصم", "http://server8.mp3quran.net/namh/");
createCategory("القارئ هاني الرفاعي | حفص عن عاصم", "http://server8.mp3quran.net/hani/");
createCategory("القارئ ياسر الدوسري | حفص عن عاصم", "http://server11.mp3quran.net/yasser/");
createCategory("القارئ ياسر القرشي | حفص عن عاصم", "http://server9.mp3quran.net/qurashi/");
createCategory("القارئ يحيى حوا | حفص عن عاصم", "http://server12.mp3quran.net/yahya/");
createCategory("القارئ يوسف الشويعي | حفص عن عاصم", "http://server9.mp3quran.net/yousef/");
createCategory("القارئ يوسف بن نوح أحمد | حفص عن عاصم", "http://server8.mp3quran.net/noah/");
createCategory("القارئ ابراهيم الدوسري | ورش عن نافع", "http://server10.mp3quran.net/ibrahim_dosri_warsh/");
createCategory("القارئ العيون الكوشي | ورش عن نافع", "http://server11.mp3quran.net/koshi/");
createCategory("القارئ القارئ ياسين | ورش عن نافع", "http://server11.mp3quran.net/qari/");
createCategory("القارئ عبدالباسط عبدالصمد | ورش عن نافع", "http://server10.mp3quran.net/basit_warsh/");
createCategory("القارئ عمر القزابري | ورش عن نافع", "http://server9.mp3quran.net/omar_warsh/");
createCategory("القارئ محمود خليل الحصري | ورش عن نافع", "http://server9.mp3quran.net/husr_warsh/");
createCategory("القارئ محمد عبدالكريم | ورش عن نافع من طريق أبي بكر الأصبهاني", "http://server7.mp3quran.net/m_kreem_warsh/");
createCategory("القارئ أحمد خضر الطرابلسي | قالون عن نافع", "http://server10.mp3quran.net/trablsi/");
createCategory("القارئ الدوكالي محمد العالم | قالون عن نافع", "http://server7.mp3quran.net/dokali/");
createCategory("القارئ علي الحذيفي | قالون عن نافع", "http://server9.mp3quran.net/huthifi_qalon/");
createCategory("القارئ وليد النائحي | قالون عن نافع من طريق أبي نشيط", "http://server9.mp3quran.net/waleed/");
createCategory("القارئ الفاتح محمد الزبير | الدوري عن أبي عمرو", "http://server6.mp3quran.net/fateh/");
createCategory("القارئ عبدالرشيد صوفي | السوسي عن أبي عمرو", "http://server9.mp3quran.net/soufi/");
createCategory("القارئ محمد عبدالحكيم سعيد العبدالله | الدوري عن الكسائي", "http://server12.mp3quran.net/abdullah_dori/");
createCategory("القارئ محمود الشيمي | الدوري عن الكسائي", "http://server10.mp3quran.net/sheimy/");
createCategory("القارئ مفتاح السلطني | الدوري عن الكسائي", "http://server6.mp3quran.net/saltany_kisaia/");
createCategory("القارئ مفتاح السلطني | الدوري عن أبي عمرو", "http://server9.mp3quran.net/sultany/");
createCategory("القارئ محمد عبدالحكيم سعيد العبدالله | البزي وقنبل عن ابن كثير", "http://server9.mp3quran.net/abdullah/");
createCategory("القارئ عبدالرشيد صوفي | خلف عن حمزة", "http://server9.mp3quran.net/soufi_klf/");
createCategory("القارئ مفتاح السلطني | ابن ذكوان عن ابن عامر", "http://server11.mp3quran.net/muftah_thakwan/");
createCategory("القارئ ياسر المزروعي | قراءة يعقوب الحضرمي بروايتي رويس وروح", "http://server9.mp3quran.net/mzroyee/");
createCategory("القارئ عبدالباسط عبدالصمد | المصحف المجود", "http://server13.mp3quran.net/basit_mjwd/");
createCategory("القارئ محمد صديق المنشاوي | المصحف المجود", "http://server11.mp3quran.net/minsh_mjwd/");
createCategory("القارئ محمود خليل الحصري | المصحف المجود", "http://server9.mp3quran.net/husr_mjwd/");
createCategory("القارئ محمود علي البنا | المصحف المجود", "http://server8.mp3quran.net/bna_mjwd/");

function QuranAudioLibrary() {
    ScriptableServiceScript.call(this, "Quran Audio Library", 2, "Listen to High Quality Quran Recitations from \"Quran Audio Library\"", "Quran Audio Library", false);
    Amarok.debug("ok.");
}

function onConfigure() {
    Amarok.alert("This script no configuration requires !");
}

function onPopulating(level, callbackData, filter) {
    
    if (level == 1) {
        
        for(att in categories) {
            
            Amarok.debug ("att: " + att + ", " + categories[att].name);

            item = Amarok.StreamItem;
            item.level = 1;
            item.callbackData = att;
            item.itemName = att;
            item.playableUrl = "";
            item.infoHtml = "";
            script.insertItem(item);
        }
        script.donePopulating();

    }
    else if (level == 0) {
        
        Amarok.debug(" Collected emitters...");
        //add the station streams as leaf nodes

        var stationArray = categories[callbackData];

        for (i = 0; i < stationArray.length; i++) {
            item = Amarok.StreamItem;
            item.level = 0;
            item.callbackData = "";
            item.itemName = stationArray[i].name;
            item.playableUrl = stationArray[i].url;
            item.album = callbackData;
            item.infoHtml = stationArray[i].description;
            item.artist = "Quran Audio Library";
            script.insertItem(item);
        }
        script.donePopulating();
    }
}

function onCustomize() {
    var currentDir = Amarok.Info.scriptPath() + "/";
    var iconPixmap = new QPixmap(currentDir+"icon.png");
    script.setIcon(iconPixmap);
}

Amarok.configured.connect(onConfigure);

script = new QuranAudioLibrary();
script.populate.connect(onPopulating);
script.customize.connect(onCustomize);