export interface Project {
  id: string
  client: string
  vessel?: string
  activity: string
  period?: string
  status: "current" | "completed"
  year?: number
}

export const currentProjects: Project[] = [
  { id: "c1", client: "ADNOC LOGISTICS & SERVICES", vessel: "LCT Sea Parrot", activity: "Charter Hire of One (1) Landing Craft", status: "current" },
  { id: "c2", client: "ANOC Logistics & Services", vessel: "Mutawa 402", activity: "Hire of Non-DP Supply Vessel", status: "current" },
  { id: "c3", client: "ANOC Logistics & Services", vessel: "Mutawa 105", activity: "Charter of Anchor Handling Tug", status: "current" },
  { id: "c4", client: "ANOC Logistics & Services", vessel: "Mutawa 202", activity: "Provision of one heavy-duty speed boat", status: "current" },
  { id: "c5", client: "ANOC Logistics & Services", vessel: "Mutawa 104", activity: "Charter of one (1) field mooring, maintenance and dive support vessel", status: "current" },
  { id: "c6", client: "ANOC Logistics & Services", vessel: "Mutawa 106", activity: "Hire of One (1) Safety Stand-by Rescue Vessel", status: "current" },
  { id: "c7", client: "ANOC Logistics & Services", vessel: "Mutawa 312", activity: "Charter of one (1) field mooring, maintenance and dive support vessel", status: "current" },
  { id: "c8", client: "ANOC Logistics & Services", vessel: "Mutawa 313", activity: "Charter of Tow Tugs to Support NPCC Offshore Operation in Abu Dhabi", status: "current" },
  { id: "c9", client: "ANOC Logistics & Services", vessel: "Mutawa 102", activity: "Charter Of One(1) Mooring, Maintenance and Diving Support Vessels", status: "current" },
  { id: "c10", client: "ANOC Logistics & Services", vessel: "Mutawa 304", activity: "Charter one One (1) vessel in support of ADNOC Offshore Marine Operations", status: "current" },
  { id: "c11", client: "ANOC Logistics & Services", vessel: "Faisal-1", activity: "Hire of Maintenance Boat for Umm Shaif Fields-Mobilization of MV Faisal-1", status: "current" },
  { id: "c12", client: "ANOC Logistics & Services", vessel: "Khalfan -1", activity: "Hire Of Maintenance Boat For Umm Lulu & Nasr Fields", status: "current" },
  { id: "c13", client: "ANOC Logistics & Services", vessel: "Mutawa 12", activity: "Hire of Top side Maintenance Vessel M.V. Mutawa 12 for Zakum Field", status: "current" },
  { id: "c14", client: "ANOC Logistics & Services", vessel: "Mutawa 306", activity: "Hire of One(1) Platform Supply Vessel", status: "current" },
  { id: "c15", client: "ANOC Logistics & Services", vessel: "Mutawa 302", activity: "Mooring Operations & Subsea Maintenance Services Using Marine Vessel", status: "current" },
  { id: "c16", client: "ADOC-JAPAN", vessel: "Mutawa 301", activity: "Charter of One (1) AHTS Vessel with crane", status: "current" },
  { id: "c17", client: "National Petroleum Const.Co. (NPCC)", vessel: "Mutawa 101", activity: "Charter of A Diving Support Vessel to Support NPCC's Offshore Operations in Abu Dhabi", status: "current" },
  { id: "c18", client: "National Petroleum Const.Co. (NPCC)", vessel: "Mutawa 11", activity: "Charter Of M/V Mutawa 11 to Support Offshore Campaigns In AUH", status: "current" },
  { id: "c19", client: "National Petroleum Const.Co. (NPCC)", vessel: "Mutawa 303", activity: "Charter Of M/V Mutawa 303 to Support NPCC's Offshore Campaigns Under AUH Projects", status: "current" },
  { id: "c20", client: "National Petroleum Const.Co. (NPCC)", vessel: "Mutawa 401 (DP2)", activity: "Charter of ADP-2 Vessel TO Support NPCC Operations in U.A.E", status: "current" },
  { id: "c21", client: "National Petroleum Const.Co. (NPCC)", activity: "Provision of General Diving Services", status: "current" },
]

export const completedProjects: Project[] = [
  { id: "p1", client: "ADNOC Offshore", period: "01/2019 to 11/2021", vessel: "Faisal 1", activity: "Hire of Maintenance Boat for Umm Lulu & Al Nasr", status: "completed", year: 2021 },
  { id: "p2", client: "ADNOC Offshore", period: "01/2019 to 02/2022", vessel: "Khalfan", activity: "Hire of Maintenance Boat for US field", status: "completed", year: 2022 },
  { id: "p3", client: "ADNOC Offshore", period: "01/2020 to 02/2022", activity: "Diving services on Board DSV ARADA", status: "completed", year: 2022 },
  { id: "p4", client: "NPCC", period: "05/2018 to 03/2020", vessel: "Mutawa 10", activity: "Charter of a Supply vessel", status: "completed", year: 2020 },
  { id: "p5", client: "ZMI", period: "08/2017 to 08/2020", vessel: "Mutawa 303", activity: "Charter of AHT Vessel", status: "completed", year: 2020 },
  { id: "p6", client: "ADNOC Offshore", period: "08/2014 to 12/2019", vessel: "Mutawa 401", activity: "Subsea inspection maintenance and repair of pipelines and structures using DP-2 Vessel", status: "completed", year: 2019 },
  { id: "p7", client: "ADNOC Offshore", period: "08/2013 to 12/2019", vessel: "Mutawa-9", activity: "Diving & Underwater Inspection services", status: "completed", year: 2019 },
  { id: "p8", client: "ADNOC Offshore", period: "11/2010 to 12/2019", vessel: "Mutawa 11", activity: "Provision of Subsea Inspection Services", status: "completed", year: 2019 },
  { id: "p9", client: "ZMI", period: "11/2016 to 11/2019", vessel: "Mutawa 102", activity: "Charter of AHT Vessel Mutawa 102 with Dive team and Equipment", status: "completed", year: 2019 },
  { id: "p10", client: "ADOC Japan", period: "05/2016 to 05/2019", vessel: "Mutawa 312", activity: "Charter of AHTS vessel", status: "completed", year: 2019 },
  { id: "p11", client: "NPCC", period: "06/2018 to 10/2019", vessel: "Mutawa 13", activity: "Charter of Work Boat", status: "completed", year: 2019 },
  { id: "p12", client: "NPCC", period: "03/2019 to 06/2019", vessel: "Mutawa 11", activity: "Hire of work boat to India", status: "completed", year: 2019 },
  { id: "p13", client: "NPCC", period: "02/2019 to 04/2019", vessel: "Mutawa 103 & 104", activity: "Charter of AHT", status: "completed", year: 2019 },
  { id: "p14", client: "Adma-Opco", period: "01/2014 to 12/2014", activity: "Charter of Topside Maintenance Vessel 'Jack-up Barge M.B. 1'", status: "completed", year: 2014 },
  { id: "p15", client: "Adma-Opco", period: "02/2015 to 01/2019", activity: "Hire of Mini Barge for Topside Maintenance", status: "completed", year: 2019 },
  { id: "p16", client: "Adma-Opco", period: "06/2004 to 12/2014", vessel: "M/V Faisal-1", activity: "Subsea Inspection Services of Subsea Lines and Offshore Structures", status: "completed", year: 2014 },
  { id: "p17", client: "Adma-Opco", period: "04/2004 to 12/2014", vessel: "M/V Khalfan", activity: "Subsea Maintenance/Repair of Pipelines and Structures", status: "completed", year: 2014 },
  { id: "p18", client: "ZADCO", period: "01/2011 to 08/2015", vessel: "Mutawa 101", activity: "Charter of Dive support & AHT Vessel", status: "completed", year: 2015 },
  { id: "p19", client: "ZADCO", period: "08/2010 to 08/2014", vessel: "Zakher Admiral", activity: "Provision of Additional U/W Diving Maintenance & Inspection Services", status: "completed", year: 2014 },
  { id: "p20", client: "ZADCO", period: "11/2015 to 08/2016", vessel: "Mutawa 402", activity: "Charter of Marine vessel in support of new offshore 7th drilling rig", status: "completed", year: 2016 },
  { id: "p21", client: "ZADCO", period: "11/2012 to 11/2015", vessel: "Mutawa 203", activity: "Marine Transportation of Passengers", status: "completed", year: 2015 },
  { id: "p22", client: "ZADCO", period: "12/2013 to 05/2014", vessel: "Mutawa 10", activity: "Spot Hire of Utility work boat for UZ Field Wells", status: "completed", year: 2014 },
  { id: "p23", client: "ZADCO", period: "12/2014 to 11/2015", vessel: "Mutawa 10", activity: "Charter of Utility Work Boat", status: "completed", year: 2015 },
  { id: "p24", client: "ZADCO", period: "08/2013 to 02/2019", vessel: "Mutawa-9", activity: "Diving & Underwater Inspection", status: "completed", year: 2019 },
  { id: "p25", client: "ZADCO", period: "04/2012 to 03/2015", activity: "Onshore Refurbishment Services to marine buoys", status: "completed", year: 2015 },
  { id: "p26", client: "ESNAAD/ZADCO", period: "11/2005 to 11/2015", vessel: "Mutawa-9", activity: "Charter of Diving Support Vessel", status: "completed", year: 2015 },
  { id: "p27", client: "ESNAAD/ZADCO", period: "07/2013 to 06/2016", vessel: "Mutawa 102", activity: "Charter of AHT/Supply Vessel", status: "completed", year: 2016 },
  { id: "p28", client: "ESNAAD", period: "07/2013 to 07/2016", vessel: "Mutawa 302", activity: "Charter of Supply Vessel", status: "completed", year: 2016 },
  { id: "p29", client: "ESNAAD", period: "03/2015 to 05/2015", vessel: "Mutawa 304", activity: "Hire of Work Boat", status: "completed", year: 2015 },
  { id: "p30", client: "ESNAAD/ADMA", period: "01/2015 to 01/2018", vessel: "Mutawa 305", activity: "Hire of Field mooring Maintenance vessel with divers and Equipment", status: "completed", year: 2018 },
  { id: "p31", client: "Total ABK", period: "06/2011 to 08/2018", vessel: "Mutawa-202", activity: "Provision of one Heavy Duty Speed Boat", status: "completed", year: 2018 },
  { id: "p32", client: "Total ABK", period: "11/2013 to 10/2014", vessel: "Mutawa-105", activity: "Anchor Handling Tug boat", status: "completed", year: 2014 },
  { id: "p33", client: "Total ABK", period: "07/2013 to 12/2014", vessel: "Mutawa-304", activity: "Drilling Supply Vessel", status: "completed", year: 2014 },
  { id: "p34", client: "ADOC Japan", period: "08/2011 to 08/2014", vessel: "Sub-sea 89/Mutawa 301", activity: "Chartering of Tug/Supply/utility vessel", status: "completed", year: 2014 },
  { id: "p35", client: "ADOC Japan", period: "08/2012 to 08/2015", vessel: "Mutawa 301/303", activity: "Chartering of one Tug, Supply/Standby, Utility Vessel", status: "completed", year: 2015 },
  { id: "p36", client: "M.O.P/Kuwait Oil Co (K.S.C.)", period: "12/2006 to 11/2011", vessel: "Mutawa-10", activity: "45m Utility/Support Vessel Offshore support Services at Kuwait", status: "completed", year: 2011 },
  { id: "p37", client: "ADOC Japan", period: "09/2015 to 08/2018", vessel: "Mutawa-304", activity: "Charter of Straight Supply Vessel", status: "completed", year: 2018 },
  { id: "p38", client: "NPCC", period: "11/2010 to 11/2011", vessel: "Mutawa 12", activity: "Charter of Diving Support Vessel", status: "completed", year: 2011 },
  { id: "p39", client: "Van Oord", period: "05/2011 to 12/2011", vessel: "Crew Boat Khulood", activity: "Charter of Crew Boat", status: "completed", year: 2011 },
  { id: "p40", client: "ADOC Japan", period: "07/2010 to 01/2011", activity: "Hire of Diving Support Vessel, Inspection Team and Equipment for Sub-sea Inspection of Platforms & Jackets in Mubarraz Field", status: "completed", year: 2011 },
  { id: "p41", client: "NPCC", period: "10/2008 to 11/2010", vessel: "Mutawa 11", activity: "Charter of Diving Support Vessel", status: "completed", year: 2010 },
  { id: "p42", client: "ZADCO", period: "01/2001 to 12/2009", vessel: "CB Khulood", activity: "27.50M Aluminum Crew Boat. Charter of Transportation Utility Vessel for Umm Al Dalkh Field", status: "completed", year: 2009 },
  { id: "p43", client: "Adma-Opco", period: "08/2005 to 07/2009", vessel: "NMS-401, NMS-402", activity: "General Diving Services", status: "completed", year: 2009 },
  { id: "p44", client: "CORODEX (Nakheel Palm Jumeirah)", period: "07/2008 to 02/2009", activity: "Subsea excavation & minor dredging for installing 10-16\" pipeline offshore at Palm Island Development project", status: "completed", year: 2009 },
  { id: "p45", client: "ZAMIL Hyundai/Adma-Opco", period: "03/2008 to 12/2008", vessel: "Mutawa-101", activity: "Charter of multipurpose vessel", status: "completed", year: 2008 },
  { id: "p46", client: "TOLEDO/GASCO", period: "02/2007 to 05/2007", activity: "Subsea excavation & minor dredging for Installation of 3\" GRE Dosing Lines at Ruwais", status: "completed", year: 2007 },
  { id: "p47", client: "ZADCO", period: "03/2004 to 09/2007", vessel: "M.V. Stanford Pelican", activity: "Charter of Crew Utility/Standby Vessel", status: "completed", year: 2007 },
  { id: "p48", client: "Zakher Marine International", period: "06/2006 to 08/2006", activity: "Hire of Utility Vessel", status: "completed", year: 2006 },
  { id: "p49", client: "NPCC", period: "08/2006 to 10/2006", activity: "Charter of Utility Vessel", status: "completed", year: 2006 },
  { id: "p50", client: "Takreer (Engineers India Ltd)", period: "06/2004 to 07/2004", activity: "Topographic survey and underwater Inspection for jetty at Ruwais for inter Refineries Pipelines project", status: "completed", year: 2004 },
  { id: "p51", client: "Saudi Aramco", period: "01/2004 to 03/2004", activity: "Diving services in Saudi Aramco offshore Oil Fields", status: "completed", year: 2004 },
  { id: "p52", client: "KNPC Integral Services Kuwait", period: "04/2002 to 05/2004", activity: "Subsea survey of KNPC, MAA Submarine pipelines", status: "completed", year: 2004 },
  { id: "p53", client: "Maridive/Adma-Opco", period: "10/2002 to 01/2003", vessel: "Jack-up Barge M.B.-1", activity: "Freespan Correction Campaign for Adma-Opco in Zakum and Umm Shaif Fields", status: "completed", year: 2003 },
  { id: "p54", client: "ADOC (Japan)", period: "08/2002", vessel: "M.V. Safiya", activity: "Charter for Cable Laying between CFP and BB Flare in Mubarraz Field", status: "completed", year: 2002 },
  { id: "p55", client: "Fugro (M.E.)", period: "06/2002", vessel: "Jack-up Barge M.B.1", activity: "Charter of Jack-up Barge", status: "completed", year: 2002 },
  { id: "p56", client: "ADGAS", period: "04/2002 to 05/2002", activity: "Diving Services in Das Island for minor dredging of fire fighting water basin", status: "completed", year: 2002 },
  { id: "p57", client: "Integral Services Co.", period: "04/2002 to 05/2002", vessel: "M.V. Safiya", activity: "Charter and Diving Team for Subsea Survey of Submarine Pipeline in Mina Al Ahmadi, Kuwait", status: "completed", year: 2002 },
  { id: "p58", client: "CCTC/ZADCO", period: "06/2001 to 07/2001", vessel: "Jack-up Barge M.B. 1 and M.V. Safiya", activity: "Topside Construction Works in Umm Al Dalkh Field", status: "completed", year: 2001 },
  { id: "p59", client: "Fugro (ME) Ltd.", period: "05/2001", vessel: "Jack-up Barge M.B.-1", activity: "Charter of Jack-up Barge", status: "completed", year: 2001 },
  { id: "p60", client: "Al Husam Est./ADOC Japan", period: "03/2001 to 05/2001", activity: "Provision of Diving Services for Mubarraz Island Water Disposal Project", status: "completed", year: 2001 },
  { id: "p61", client: "Gulmar Offshore", period: "03/2001 to 06/2001", activity: "Provision of Diving Services in Iran", status: "completed", year: 2001 },
  { id: "p62", client: "ZADCO", period: "02/2001", vessel: "Barge Naashi", activity: "Relocation of Test Separators", status: "completed", year: 2001 },
  { id: "p63", client: "ZADCO", period: "02/2001", activity: "Fabrication of 2 Nos. 3 Ton Deadweight", status: "completed", year: 2001 },
  { id: "p64", client: "ZADCO", period: "01/2001", activity: "Refurbishment of 2 Nos. Light Marker Buoys", status: "completed", year: 2001 },
  { id: "p65", client: "ZADCO", period: "01/2001 to 03/2001", vessel: "Jack-up Barge M.B. 1", activity: "Platform Maintenance/Repair Works (Satah Field)", status: "completed", year: 2001 },
  { id: "p66", client: "Adma-Opco", period: "06/2000 to 05/2002", activity: "Maintenance/Repair of Mooring Equipment (Admiralty Buoys Mooring Buoys and 21-35 Ton Deadweights)", status: "completed", year: 2002 },
  { id: "p67", client: "ZADCO", period: "05/2000 to 06/2000", activity: "Charter of Jack-up Barge for Relocation of Radio Mast and Transfer of Logging Equipment", status: "completed", year: 2000 },
  { id: "p68", client: "Adma-Opco", period: "02/1999 to 01/2000", activity: "Freespan Correction Campaign", status: "completed", year: 2000 },
  { id: "p69", client: "ZADCO", period: "08/1999 to 02/2005", vessel: "Samriyah", activity: "Charter of Production/Maintenance/Utility Vessel", status: "completed", year: 2005 },
  { id: "p70", client: "ZADCO", period: "06/1999 to 01/2006", vessel: "Nasseem 4001", activity: "Diving and Underwater Inspection Services", status: "completed", year: 2006 },
  { id: "p71", client: "ADOC (Japan)", period: "07/1999", activity: "Subsea Inspection of Platforms and Pipelines", status: "completed", year: 1999 },
  { id: "p72", client: "ADDCAP", period: "11/1998 to 03/1999", activity: "Seabed Cleaning - Removal of Debris from Seabed in Sadiyat, Ruwais, Das Island, Zirku, Aranzah, Mubarraz Island, Umm Shaif, Satah, Umm Al Dalkh, ADOC and Abu Al Bukhoosh", status: "completed", year: 1999 },
  { id: "p73", client: "ZADCO", period: "11/1998 to 02/2003", vessel: "Ahmed", activity: "Charter of Multi-Purpose Vessel", status: "completed", year: 2003 },
  { id: "p74", client: "ADOC", period: "1997", activity: "Subsea Inspection of Platforms and Pipelines", status: "completed", year: 1997 },
  { id: "p75", client: "Etisalat", period: "1997", activity: "Diving Services", status: "completed", year: 1997 },
  { id: "p76", client: "ADGAS", period: "1997", activity: "Anode Replacement on Structures at Das", status: "completed", year: 1997 },
  { id: "p77", client: "N.D.C.", period: "01/1997 to 03/1997", activity: "Underwater Inspection in Lieu of Dry-docking of Offshore Rigs", status: "completed", year: 1997 },
  { id: "p78", client: "Adma-Opco", period: "03/1997 to 12/2003", vessel: "Mutawa Seven", activity: "Subsea Inspection of Offshore Structures", status: "completed", year: 2003 },
  { id: "p79", client: "ZADCO", period: "11/1997 to 01/1999", vessel: "Stanford Express", activity: "Charter of Crew Boat", status: "completed", year: 1999 },
  { id: "p80", client: "ZADCO", period: "09/1997 to 04/1999", vessel: "Samriyah", activity: "Charter of Safety/Stand Vessel", status: "completed", year: 1999 },
  { id: "p81", client: "Total ABK", period: "09/1996 to 03/2004", activity: "General Diving Services", status: "completed", year: 2004 },
  { id: "p82", client: "Adma-Opco", period: "10/1995 to 04/1998", activity: "Maintenance/Repair of Mooring Equipment (Admiralty Mooring Buoys and 21-35 Ton Deadweights)", status: "completed", year: 1998 },
  { id: "p83", client: "ZADCO", period: "09/1995 to 12/1998", vessel: "Nasseem, Safiya & Barracuda", activity: "Diving & Underwater Inspection & Maintenance/Repair Services", status: "completed", year: 1998 },
  { id: "p84", client: "ZADCO", period: "08/1995 to 04/1999", vessel: "Jack-up Barge M.B. 1", activity: "Charter of Jack-up Barge", status: "completed", year: 1999 },
  { id: "p85", client: "Adma-Opco", period: "10/1995 to 10/1997", activity: "Maintenance/Repair of Mooring Equipment", status: "completed", year: 1997 },
  { id: "p86", client: "Adma-Opco", period: "06/1994 to 01/1997", activity: "Maintenance/Repair of Offshore Structures and Subsea Flowlines", status: "completed", year: 1997 },
  { id: "p87", client: "ZADCO", period: "09/1993 to 09/1996", vessel: "Nasseem, Ahmed & Barracuda", activity: "Diving & Underwater Inspection & Maintenance/Repair Services", status: "completed", year: 1996 },
  { id: "p88", client: "Adma-Opco", period: "12/1990 to 08/2005", vessel: "NMS 401 & NMS 402", activity: "General Diving Services - 2 Diving Teams", status: "completed", year: 2005 },
]

// Get unique clients for filtering
export const getAllClients = (): string[] => {
  const allProjects = [...currentProjects, ...completedProjects]
  const clients = new Set(allProjects.map(p => p.client))
  return Array.from(clients).sort()
}

// Get projects by decade for timeline view
export const getProjectsByDecade = () => {
  const decades: Record<string, Project[]> = {}
  completedProjects.forEach(project => {
    if (project.year) {
      const decade = Math.floor(project.year / 10) * 10
      const decadeKey = `${decade}s`
      if (!decades[decadeKey]) decades[decadeKey] = []
      decades[decadeKey].push(project)
    }
  })
  return decades
}
