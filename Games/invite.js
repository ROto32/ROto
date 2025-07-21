// The files name used to make sense but doesnt really anymore lol
// normal game server stuff magic thing yep
var serverContainerInterval = setInterval(function () {	var serverContainer = document.getElementById('rbx-public-game-server-item-container')
	if (serverContainer != null) {
		var btrobloxExists = document.querySelector('btroblox') !== null;
		var serverElements;
		serverElements = document.querySelectorAll('.rbx-public-game-server-item');
		
		for (var i = 0; i < serverElements.length; i++) {
			var server = serverElements[i];
			try {
				var serverProps;
				var context = angular.element(server).context;
				var keys = Object.keys(context);
				
				if (keys.length > 0) {
					var reactKey = keys[0];
					var reactObj = context[reactKey];
					
					if (reactObj && reactObj.return && reactObj.return.memoizedProps) {
						serverProps = reactObj.return.memoizedProps;
					}
					else if (reactObj && reactObj.alternate && reactObj.alternate.return && reactObj.alternate.return.memoizedProps) {
						serverProps = reactObj.alternate.return.memoizedProps;
					}
					else if (reactObj && reactObj.memoizedProps) {
						serverProps = reactObj.memoizedProps;
					}
					else if (reactObj && reactObj.child && reactObj.child.return && reactObj.child.return.memoizedProps) {
						serverProps = reactObj.child.return.memoizedProps;
					}
				}
				
				var gameId = serverProps && serverProps.id ? serverProps.id : server.getAttribute('data-gameid');			
				if (gameId && gameId.length > 0) {					
					var currentServerId = gameId.replace(/[^a-zA-Z0-9-]/g, '');
					var oldServerId = server.getAttribute('data-roto-serverid');
					
					server.setAttribute('data-roto-serverid', currentServerId);
							if (oldServerId != currentServerId) {
						var createServerLinks = server.getElementsByClassName('create-server-link');
						if (createServerLinks.length > 0) {
							createServerLinks[0].remove();
							server.classList.remove('roto-server-invite-added');
						}
						server.removeAttribute('data-roto-processed');
					}
				}
			} catch (e) {
			}
			server.classList.add('roto-checked');
		}
	}	
	// Servers friends are in stuff magic thing yep
	var serverContainer = document.getElementById('rbx-friends-game-server-item-container')
	if (serverContainer != null) {
		var serverElements = document.querySelectorAll('.rbx-friends-game-server-item');
		for (var i = 0; i < serverElements.length; i++) {
			var server = serverElements[i];
			try {
				var serverProps;
				var context = angular.element(server).context;
				var keys = Object.keys(context);
				
				if (keys.length > 0) {
					var reactKey = keys[0];
					var reactObj = context[reactKey];
					
					if (reactObj && reactObj.alternate && reactObj.alternate.return && reactObj.alternate.return.memoizedProps) {
						serverProps = reactObj.alternate.return.memoizedProps;
					}
					else if (reactObj && reactObj.return && reactObj.return.memoizedProps) {
						serverProps = reactObj.return.memoizedProps;
					}
					else if (reactObj && reactObj.memoizedProps) {
						serverProps = reactObj.memoizedProps;
					}
					else if (reactObj && reactObj.child && reactObj.child.return && reactObj.child.return.memoizedProps) {
						serverProps = reactObj.child.return.memoizedProps;
					}
				}
				
				var gameId = serverProps && serverProps.id ? serverProps.id : server.getAttribute('data-gameid');
				
				if (gameId && gameId.length > 0) {
					var currentServerId = gameId;
					var oldServerId = server.getAttribute('data-roto-serverid');
					server.setAttribute('data-roto-serverid', currentServerId);					if (oldServerId != currentServerId) {
						var serverElements = server.querySelectorAll('.roto-added-element');
						for (var j = 0; j < serverElements.length; j++) {
							serverElements[j].remove();
						}
						server.removeAttribute('data-roto-processed');
					}
				}
			} catch (e) {
				
			}
			server.classList.add('roto-checked');
		}
	}	
	// Private server stuff magic thing yep
	var serverContainer = document.getElementById('rbx-private-game-server-item-container')
	if (serverContainer != null) {
		var serverElements = document.querySelectorAll('.rbx-private-game-server-item');
		for (var i = 0; i < serverElements.length; i++) {
			var server = serverElements[i];
			try {
				var serverProps;
				var context = angular.element(server).context;
				var keys = Object.keys(context);
				
				if (keys.length > 0) {
					var reactKey = keys[0];
					var reactObj = context[reactKey];
					
					if (reactObj && reactObj.alternate && reactObj.alternate.return && reactObj.alternate.return.memoizedProps) {
						serverProps = reactObj.alternate.return.memoizedProps;
					}
					else if (reactObj && reactObj.return && reactObj.return.memoizedProps) {
						serverProps = reactObj.return.memoizedProps;
					}
					else if (reactObj && reactObj.memoizedProps) {
						serverProps = reactObj.memoizedProps;
					}					else if (reactObj && reactObj.child && reactObj.child.return && reactObj.child.return.memoizedProps) {
						serverProps = reactObj.child.return.memoizedProps;
					}
				}						var accessCode = serverProps && serverProps.accessCode ? serverProps.accessCode : server.getAttribute('data-roto-accesscode');
				
				var vipServerId = serverProps && serverProps.vipServerId ? serverProps.vipServerId : server.getAttribute('data-roto-vipserverid');
				
				var placeIdMatch = window.location.href.match(/games\/(\d+)\//);
				var placeId = placeIdMatch ? placeIdMatch[1] : "";
				var serverId = serverProps && serverProps.id ? serverProps.id : server.getAttribute('data-gameid');
				var gameId = placeId || ""; 
				if ((serverId && serverId.length > 0) || accessCode) {
					var currentServerId = (serverId && serverId.length > 0) ? serverId : "null";
					var oldAccessCode = server.getAttribute('data-roto-accesscode');
					var oldVipServerId = server.getAttribute('data-roto-vipserverid');
					
					if (accessCode) {
						server.setAttribute('data-roto-accesscode', accessCode);
					}
					if (vipServerId) {
						server.setAttribute('data-roto-vipserverid', vipServerId);
					}
					server.setAttribute('data-roto-serverid', currentServerId);					
					server.setAttribute('data-roto-processed', 'true');
					
					if (oldAccessCode != accessCode || oldVipServerId != vipServerId) {
						var serverElements = server.querySelectorAll('.roto-added-element');
						for (var j = 0; j < serverElements.length; j++) {
							serverElements[j].remove();
						}
						server.removeAttribute('data-roto-processed');
					}
				}
			} catch (e) {
			}
			server.classList.add('roto-checked');
		}
	}
}, 500)