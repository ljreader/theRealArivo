// https://www.chase.com/apps/services/tags/https/www.chase.com/content/chase-ux/en/structured/module/direct-to-dealer/payment_calculator_liquid

CHASE.TagManager.processTags({
	"jsonScriptArray": [{
		"mappingID": "1057826769",
		"scripts": ["audienceSyndication()"],
		"urls": ["https://googleads.g.doubleclick.net/pagead/viewthroughconversion/1036322744/?value=0&label=AgenCNqg-QMQuI-U7gM&guid=ON&script=0", "https://rc.rlcdn.com/395556.gif", "https://rf15.chase.com/activity?_o=15629&_t=20740275", "https://rf15.chase.com/activity?_o=15629&_t=20751906&ssv_eci={persona.ECI}", "https://stags.bluekai.com/site/39254?limit=10&ret=html&phint=v1st%3D{V1st}&phint=ECI%3D{persona.ECI}&phint=CAT%3D{CAT}&bknms=1&phint=PAGECODE%3D{page_code}&phint=SEGMENT%3D{persona.segment}&phint=SPID%3D{SPID}&phint=CELL%3D{CELL}&phint=KNOWNUSER%3D{persona.known}&phint=URL%3D{pageUrl}&ord={random}?", "https://analytics.twitter.com/i/adsct?p_id=Twitter&p_user_id=0&txn_id=nva0n&events=%5B%5B%22pageview%22%2Cnull%5D%5D&tw_sale_amount=0&tw_order_quantity=0", "https://www.facebook.com/tr?id=1417752451601363&ev=PageView&noscript=1", "https://dc.ads.linkedin.com/collect/?pid=117721&fmt=gif", "https://www.facebook.com/tr?id=374946062945370&ev=PageView&noscript=1"],
		"conditions": "TM.clientVars.query.SPID!=='FNZ2' ||TM.clientVars.query.SPID!=='fnz2' ||TM.clientVars.SPID!=='FNZ2' ||TM.clientVars.SPID!=='fnz2'",
		"fireOnce": true
	}, {
		"mappingID": "A1567108480",
		"urls": ["https://rf15.chase.com/activity?_o=15629&_t=cookie_harvest&ssv_v1st={v1st}&ssv_V1st2={query.wa_v1st}&ssv_pfid={persona.pfid}&ssv_pfid2={query.wa_pid}&ssv_eci={persona.ECI}"],
		"conditions": "TM.clientVars.query.SPID!=='FNZ2' ||TM.clientVars.query.SPID!=='fnz2' ||TM.clientVars.SPID!=='FNZ2' ||TM.clientVars.SPID!=='fnz2'",
		"fireOnce": true
	}]
});