(function() {
  if (typeof HBInit !== "function") {
    console.error("HBInit nie jest dostepne. Otworz https://html5.haxball.com/headless i poczekaj az strona sie zaladuje.");
    return;
  }

  if (window.headlessRoom) {
    console.warn("Headless host jest juz uruchomiony na tej stronie.");
    return;
  }

  const CUSTOM_STADIUMS = {
    copilot_test: `{
  "name" : "Copilot Test",
	
  "width" : 460,
  "height" : 220,
	
  "spawnDistance" : 190,
	
  "bg" : { "type" : "grass", "width" : 410, "height" : 190, "kickOffRadius" : 85, "cornerRadius" : 35 },

  "vertexes" : [
    { "x" : -410, "y" : 190,  "trait" : "ballArea" },
    { "x" : -410, "y" : 72,   "trait" : "ballArea" },
    { "x" : -410, "y" : -72,  "trait" : "ballArea" },
    { "x" : -410, "y" : -190, "trait" : "ballArea" },
		
    { "x" : 410, "y" : 190,  "trait" : "ballArea" },
    { "x" : 410, "y" : 72,   "trait" : "ballArea" },
    { "x" : 410, "y" : -72,  "trait" : "ballArea" },
    { "x" : 410, "y" : -190, "trait" : "ballArea" },
		
    { "x" : 0, "y" :  220, "trait" : "kickOffBarrier" },
    { "x" : 0, "y" :   85, "trait" : "kickOffBarrier" },
    { "x" : 0, "y" :  -85, "trait" : "kickOffBarrier" },
    { "x" : 0, "y" : -220, "trait" : "kickOffBarrier" },
		
    { "x" : -420, "y" : -72, "trait" : "goalNet" },
    { "x" : -440, "y" : -52, "trait" : "goalNet" },
    { "x" : -440, "y" :  52, "trait" : "goalNet" },
    { "x" : -420, "y" :  72, "trait" : "goalNet" },
		
    { "x" : 420, "y" : -72, "trait" : "goalNet" },
    { "x" : 440, "y" : -52, "trait" : "goalNet" },
    { "x" : 440, "y" :  52, "trait" : "goalNet" },
    { "x" : 420, "y" :  72, "trait" : "goalNet" },
		
    { "x" : -345, "y" : -190, "trait" : "ballArea" },
    { "x" : -410, "y" : -125, "trait" : "ballArea" },
    { "x" : -410, "y" :  125, "trait" : "ballArea" },
    { "x" : -345, "y" :  190, "trait" : "ballArea" },
		
    { "x" : 345, "y" : -190, "trait" : "ballArea" },
    { "x" : 410, "y" : -125, "trait" : "ballArea" },
    { "x" : 410, "y" :  125, "trait" : "ballArea" },
    { "x" : 345, "y" :  190, "trait" : "ballArea" },

    { "x" : -410, "y" : -110, "trait" : "decor" },
    { "x" : -280, "y" : -110, "trait" : "decor" },
    { "x" : -280, "y" :  110, "trait" : "decor" },
    { "x" : -410, "y" :  110, "trait" : "decor" },

    { "x" :  410, "y" : -110, "trait" : "decor" },
    { "x" :  280, "y" : -110, "trait" : "decor" },
    { "x" :  280, "y" :  110, "trait" : "decor" },
    { "x" :  410, "y" :  110, "trait" : "decor" },

    { "x" : -410, "y" : -50, "trait" : "decor" },
    { "x" : -366, "y" : -50, "trait" : "decor" },
    { "x" : -366, "y" :  50, "trait" : "decor" },
    { "x" : -410, "y" :  50, "trait" : "decor" },

    { "x" :  410, "y" : -50, "trait" : "decor" },
    { "x" :  366, "y" : -50, "trait" : "decor" },
    { "x" :  366, "y" :  50, "trait" : "decor" },
    { "x" :  410, "y" :  50, "trait" : "decor" },

    { "x" : -280, "y" : -73, "trait" : "decor" },
    { "x" : -280, "y" :  73, "trait" : "decor" },

    { "x" :  280, "y" : -73, "trait" : "decor" },
    { "x" :  280, "y" :  73, "trait" : "decor" }
  ],
	
  "segments" : [
    { "v0" : 0, "v1" : 1, "trait" : "ballArea" },
    { "v0" : 2, "v1" : 3, "trait" : "ballArea" },
    { "v0" : 4, "v1" : 5, "trait" : "ballArea" },
    { "v0" : 6, "v1" : 7, "trait" : "ballArea" },
		
    { "v0" : 12, "v1" : 13, "trait" : "goalNet", "curve" : -90 },
    { "v0" : 13, "v1" : 14, "trait" : "goalNet" },
    { "v0" : 14, "v1" : 15, "trait" : "goalNet", "curve" : -90 },
		
    { "v0" : 16, "v1" : 17, "trait" : "goalNet", "curve" : 90 },
    { "v0" : 17, "v1" : 18, "trait" : "goalNet" },
    { "v0" : 18, "v1" : 19, "trait" : "goalNet", "curve" : 90 },
		
    { "v0" : 8, "v1" : 9, "trait" : "kickOffBarrier" },
    { "v0" : 9, "v1" : 10, "trait" : "kickOffBarrier", "curve" : 180, "cGroup" : ["blueKO"] },
    { "v0" : 9, "v1" : 10, "trait" : "kickOffBarrier", "curve" : -180, "cGroup" : ["redKO"] },
    { "v0" : 10, "v1" : 11, "trait" : "kickOffBarrier" },
		
    { "v0" : 20, "v1" : 21, "trait" : "ballArea", "curve" : -90 },
    { "v0" : 22, "v1" : 23, "trait" : "ballArea", "curve" : -90 },
    { "v0" : 24, "v1" : 25, "trait" : "ballArea", "curve" : 90 },
    { "v0" : 26, "v1" : 27, "trait" : "ballArea", "curve" : 90 },

    { "v0" : 28, "v1" : 29, "trait" : "decor" },
    { "v0" : 29, "v1" : 30, "trait" : "decor" },
    { "v0" : 30, "v1" : 31, "trait" : "decor" },

    { "v0" : 32, "v1" : 33, "trait" : "decor" },
    { "v0" : 33, "v1" : 34, "trait" : "decor" },
    { "v0" : 34, "v1" : 35, "trait" : "decor" },

    { "v0" : 36, "v1" : 37, "trait" : "decor" },
    { "v0" : 37, "v1" : 38, "trait" : "decor" },
    { "v0" : 38, "v1" : 39, "trait" : "decor" },

    { "v0" : 40, "v1" : 41, "trait" : "decor" },
    { "v0" : 41, "v1" : 42, "trait" : "decor" },
    { "v0" : 42, "v1" : 43, "trait" : "decor" },

    { "v0" : 44, "v1" : 45, "trait" : "decor" },
    { "v0" : 45, "v1" : 46, "trait" : "decor", "curve" : 118 },

    { "v0" : 46, "v1" : 47, "trait" : "decor", "curve" : -118 }
  ],
	
  "goals" : [
    { "p0" : [-410, 72], "p1" : [-410,-72], "team" : "red" },
    { "p0" : [410, 72], "p1" : [410,-72], "team" : "blue" }
  ],
	
  "discs" : [
    { "pos" : [-410,  72], "trait" : "goalPost", "color" : "F8B500" },
    { "pos" : [-410, -72], "trait" : "goalPost", "color" : "F8B500" },
    { "pos" : [ 410,  72], "trait" : "goalPost", "color" : "00B7FF" },
    { "pos" : [ 410, -72], "trait" : "goalPost", "color" : "00B7FF" },
    { "pos" : [   0,  0], "radius" : 3, "invMass" : 0, "color" : "FFFFFF", "cGroup" : [], "cMask" : [] },
    { "pos" : [-324,  0], "radius" : 2, "invMass" : 0, "color" : "FFFFFF", "cGroup" : [], "cMask" : [] },
    { "pos" : [ 324,  0], "radius" : 2, "invMass" : 0, "color" : "FFFFFF", "cGroup" : [], "cMask" : [] }
  ],
	
  "planes" : [
    { "normal" : [0, 1], "dist" : -190, "trait" : "ballArea" },
    { "normal" : [0,-1], "dist" : -190, "trait" : "ballArea" },
    { "normal" : [ 0, 1], "dist" : -220, "bCoef" : 0.1 },
    { "normal" : [ 0,-1], "dist" : -220, "bCoef" : 0.1 },
    { "normal" : [ 1, 0], "dist" : -460, "bCoef" : 0.1 },
    { "normal" : [-1, 0], "dist" : -460, "bCoef" : 0.1 }
  ],
	
  "traits" : {
    "ballArea" : { "vis" : false, "bCoef" : 1, "cMask" : ["ball"] },
    "goalPost" : { "radius" : 8, "invMass" : 0, "bCoef" : 0.5 },
    "goalNet" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball"] },
    "kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO", "blueKO"], "cMask" : ["red", "blue"] },
    "decor" : { "vis" : true, "bCoef" : 0, "cMask" : [], "cGroup" : [], "color" : "FFFFFF", "radius" : 0 }
  }
}`,
  };

  const HOST_CONFIG = {
    roomName: "Test Real Soccer",
    maxPlayers: 16,
    public: false,
    noPlayer: true,
    playerName: "Host",
    token: "",
    defaultStadium: "Big",
    defaultCustomStadium: "copilot_test",
    scoreLimit: 5,
    timeLimit: 0,
  };

  const POWER_SHOT_CONFIG = {
    stadiumName: "copilot_test",
    chargeTicks: 120,
    triggerDistance: 28,
    releaseDistance: 34,
    boostMultiplier: 2.8,
    minSpeed: 18,
  };

  let currentStadiumName = HOST_CONFIG.defaultCustomStadium;
  const powerShotState = {
    holderId: null,
    chargeTicks: 0,
    readyPlayerId: null,
    pendingKickPlayerId: null,
  };

  function updateAdmins(room) {
    const players = room.getPlayerList().filter((player) => player.id !== 0);

    if (players.length === 0) {
      return;
    }

    if (players.some((player) => player.admin)) {
      return;
    }

    room.setPlayerAdmin(players[0].id, true);
  }

  function pointDistance(pointA, pointB) {
    const dx = pointA.x - pointB.x;
    const dy = pointA.y - pointB.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  function resetPowerShotState() {
    powerShotState.holderId = null;
    powerShotState.chargeTicks = 0;
    powerShotState.readyPlayerId = null;
    powerShotState.pendingKickPlayerId = null;
  }

  function isPowerShotMap() {
    return currentStadiumName === POWER_SHOT_CONFIG.stadiumName;
  }

  function getClosestPlayerToBall(room) {
    const ballPosition = room.getBallPosition();

    if (ballPosition === null) {
      return null;
    }

    let closest = null;
    const players = room.getPlayerList();

    for (let index = 0; index < players.length; index += 1) {
      const player = players[index];

      if (player.team === 0 || player.position === null) {
        continue;
      }

      const distance = pointDistance(player.position, ballPosition);

      if (closest === null || distance < closest.distance) {
        closest = { player, distance };
      }
    }

    return closest;
  }

  function updatePowerShotCharge(room) {
    if (!isPowerShotMap()) {
      resetPowerShotState();
      return;
    }

    const closest = getClosestPlayerToBall(room);

    if (closest === null || closest.distance > POWER_SHOT_CONFIG.releaseDistance) {
      resetPowerShotState();
      return;
    }

    const playerId = closest.player.id;

    if (powerShotState.holderId !== playerId) {
      powerShotState.holderId = playerId;
      powerShotState.chargeTicks = 0;
      powerShotState.readyPlayerId = null;
    }

    if (powerShotState.readyPlayerId === playerId) {
      return;
    }

    if (closest.distance > POWER_SHOT_CONFIG.triggerDistance) {
      powerShotState.chargeTicks = 0;
      return;
    }

    powerShotState.chargeTicks += 1;

    if (powerShotState.chargeTicks >= POWER_SHOT_CONFIG.chargeTicks) {
      powerShotState.readyPlayerId = playerId;
      room.sendAnnouncement("POWERSHOT GOTOWY", playerId, 0xf8b500, "bold", 2);
    }
  }

  function flushPendingPowerShot(room) {
    if (powerShotState.pendingKickPlayerId === null) {
      return false;
    }

    const player = room.getPlayer(powerShotState.pendingKickPlayerId);

    if (player !== null) {
      applyPowerShotKick(room, player);
      room.sendAnnouncement(`${player.name} odpala POWERSHOT!`, undefined, 0xf8b500, "bold", 2);
    }

    resetPowerShotState();
    return true;
  }

  function applyPowerShotKick(room, player) {
    const ballProps = room.getDiscProperties(0);

    if (ballProps === null) {
      return;
    }

    let speedX = ballProps.xspeed || 0;
    let speedY = ballProps.yspeed || 0;
    let speed = Math.sqrt(speedX * speedX + speedY * speedY);

    if (speed < 0.001 && player.position !== null && ballProps.x != null && ballProps.y != null) {
      speedX = ballProps.x - player.position.x;
      speedY = ballProps.y - player.position.y;
      speed = Math.sqrt(speedX * speedX + speedY * speedY);
    }

    if (speed < 0.001) {
      return;
    }

    const boostedSpeed = Math.max(speed * POWER_SHOT_CONFIG.boostMultiplier, POWER_SHOT_CONFIG.minSpeed);
    room.setDiscProperties(0, {
      xspeed: (speedX / speed) * boostedSpeed,
      yspeed: (speedY / speed) * boostedSpeed,
    });
  }

  function hasCustomStadium(stadiumName) {
    return Object.prototype.hasOwnProperty.call(CUSTOM_STADIUMS, stadiumName);
  }

  function applyCustomStadium(room, stadiumName, byPlayer) {
    if (!hasCustomStadium(stadiumName)) {
      throw new Error(`Nieznana mapa: ${stadiumName}`);
    }

    resetPowerShotState();

    const stadiumContents = CUSTOM_STADIUMS[stadiumName];
    const scores = room.getScores();

    if (scores !== null) {
      room.stopGame();
    }

    room.setCustomStadium(stadiumContents);
    currentStadiumName = stadiumName;

    const actor = byPlayer ? byPlayer.name : "host";
    room.sendAnnouncement(
      `Mapa zaladowana: ${stadiumName} (${actor})`,
      undefined,
      0x2f9e44,
      "bold",
      1
    );
  }

  function loadInitialStadium(room) {
    if (!HOST_CONFIG.defaultCustomStadium) {
      room.setDefaultStadium(HOST_CONFIG.defaultStadium);
      return;
    }

    try {
      applyCustomStadium(room, HOST_CONFIG.defaultCustomStadium, null);
    } catch (error) {
      console.error("Blad ladowania mapy poczatkowej.", error);
      room.setDefaultStadium(HOST_CONFIG.defaultStadium);
      room.sendAnnouncement(
        `Nie udalo sie zaladowac ${HOST_CONFIG.defaultCustomStadium}. Uzywam stadionu ${HOST_CONFIG.defaultStadium}.`,
        undefined,
        0xe67e22,
        "bold",
        2
      );
    }
  }

  function normalizeStadiumName(name) {
    if (!name) {
      return null;
    }

    return name.trim().toLowerCase();
  }

  const room = HBInit({
    roomName: HOST_CONFIG.roomName,
    maxPlayers: HOST_CONFIG.maxPlayers,
    public: HOST_CONFIG.public,
    noPlayer: HOST_CONFIG.noPlayer,
    playerName: HOST_CONFIG.playerName,
    token: HOST_CONFIG.token,
  });

  room.setScoreLimit(HOST_CONFIG.scoreLimit);
  room.setTimeLimit(HOST_CONFIG.timeLimit);
  room.setTeamsLock(false);

  room.onRoomLink = function(url) {
    console.log("Room link:", url);
  };

  room.onPlayerJoin = function(player) {
    updateAdmins(room);
    room.sendAnnouncement(
      `Witaj ${player.name}. Aktualna mapa: ${currentStadiumName || HOST_CONFIG.defaultStadium}`,
      player.id,
      0x1f6feb,
      "normal",
      1
    );
  };

  room.onPlayerLeave = function(player) {
    updateAdmins(room);

    if (player.id === powerShotState.readyPlayerId || player.id === powerShotState.holderId) {
      resetPowerShotState();
    }
  };

  room.onGameTick = function() {
    if (flushPendingPowerShot(room)) {
      return;
    }

    updatePowerShotCharge(room);
  };

  room.onGameStart = function() {
    resetPowerShotState();
  };

  room.onGameStop = function() {
    resetPowerShotState();
  };

  room.onPositionsReset = function() {
    resetPowerShotState();
  };

  room.onPlayerBallKick = function(player) {
    if (!isPowerShotMap() || powerShotState.readyPlayerId !== player.id) {
      return;
    }

    powerShotState.pendingKickPlayerId = player.id;
  };

  room.onPlayerChat = function(player, message) {
    const trimmedMessage = message.trim();

    if (!trimmedMessage.startsWith("!")) {
      return true;
    }

    const [command, ...args] = trimmedMessage.split(/\s+/);

    if (!player.admin) {
      room.sendAnnouncement("Ta komenda jest tylko dla admina.", player.id, 0xc0392b, "bold", 2);
      return false;
    }

    if (command === "!map") {
      const targetMap = normalizeStadiumName(args.join(" "));

      if (!targetMap) {
        room.sendAnnouncement("Uzycie: !map classic", player.id, 0xe67e22, "bold", 2);
        return false;
      }

      try {
        applyCustomStadium(room, targetMap, player);
      } catch (error) {
        console.error(error);
        room.sendAnnouncement(`Blad ladowania mapy: ${error.message}`, player.id, 0xc0392b, "bold", 2);
      }
      return false;
    }

    if (command === "!reloadmap") {
      try {
        applyCustomStadium(room, currentStadiumName, player);
      } catch (error) {
        console.error(error);
        room.sendAnnouncement(`Blad przeladowania mapy: ${error.message}`, player.id, 0xc0392b, "bold", 2);
      }
      return false;
    }

    return true;
  };

  window.headlessRoom = room;
  window.availableCustomStadiums = Object.keys(CUSTOM_STADIUMS);
  window.loadCustomStadium = function(stadiumName) {
    return applyCustomStadium(room, normalizeStadiumName(stadiumName), null);
  };

  loadInitialStadium(room);
  console.log("Headless host uruchomiony.");
})();