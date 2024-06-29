(function () {
    let config = JSON.parse(`{"resolution":{"designWidth":1920,"designHeight":1080,"scaleMode":"fixedauto","backgroundColor":"rgba(236, 239, 244, 1)","alignV":"top","alignH":"left","screenMode":"horizontal"},"2D":{"defaultFont":"SourceHanSansSC-Regular","defaultFontSize":22,"FPS":60,"isAntialias":true,"useRetinalCanvas":false,"isAlpha":false,"webGL2D_MeshAllocMaxMem":true},"3D":{"lightClusterCount":{"x":12,"y":12,"z":12},"enableDynamicBatch":true,"defaultPhysicsMemory":16,"enableUniformBufferObject":true,"pixelRatio":1,"enableMultiLight":true,"maxLightCount":32,"maxMorphTargetCount":32},"physics2D":{"gravity":{"y":9.8,"x":0},"allowSleeping":true,"velocityIterations":8,"positionIterations":3,"pixelRatio":50,"debugDraw":false,"drawShape":true,"drawJoint":true,"drawAABB":false,"drawCenterOfMass":false},"splash":{"image":"assets/resources/background.png","fit":"center","enabled":true,"duration":1},"physics3D":{"fixedTimeStep":0.016666666666666666,"maxSubSteps":1,"enableCCD":false,"ccdThreshold":0.0001,"ccdSphereRadius":0.0001},"physics3dModule":"laya.bullet","physics2dModule":"laya.box2D","spineVersion":"3.8","stat":false,"vConsole":false,"alertGlobalError":false,"startupScene":"hello.ls","useSafeFileExtensions":true,"pkgs":[{"path":""}]}`);

    Object.assign(Laya.Config, config["2D"]);

    let config3D = config["3D"];
    Object.assign(Laya.Config3D, config3D);

    let v3 = config3D.lightClusterCount;
    Laya.Config3D.lightClusterCount = new Laya.Vector3(v3.x, v3.y, v3.z);

    if (Laya.Physics2D)
        Object.assign(Laya.Physics2DOption, config.physics2D);

    if (Laya.Laya3D && Laya.Laya3D._enablePhysics)
        Object.assign(Laya.Scene3D.physicsSettings, config.physics3D);

    Laya.init(config.resolution).then(() => {
        if ((Laya.Browser.onMobile || Laya.Browser.onIPad) && config.vConsole) {
            let script = document.createElement("script");
            script.src = "js/vConsole.min.js";
            script.onload = () => {
                window.vConsole = new VConsole();
            };
            document.body.appendChild(script);
        }

        if (config.alertGlobalError)
            Laya.alertGlobalError(true);
        if (config.debug || Laya.Browser.getQueryString("debug") == "true")
            Laya.enableDebugPanel();
        if (config.stat)
            Laya.Stat.show();

        if (config.useSafeFileExtensions)
            Laya.URL.initMiniGameExtensionOverrides();

        if (Laya.ClassUtils.getClass("SpineSkeleton"))
            Laya.SpineTemplet.RuntimeVersion = config.spineVersion || "3.8";

        if (config.workerLoaderLib)
            Laya.WorkerLoader.workerPath = config.workerLoaderLib;

        let progressCallback = new Laya.BatchProgress((progress) => {
            if (window && window.onSplashProgress)
                window.onSplashProgress(progress);
        });
        let loadSceneProgress = config.startupScene ? progressCallback.createCallback(0.5) : null;

        let promises = [Laya.loader.loadPackage("", null, progressCallback.createCallback())];
        if (config.pkgs) {
            for (let pkg of config.pkgs) {
                let manifestPath = (pkg.path.length > 0 ? (pkg.path + "/") : pkg.path) + "fileconfig.json";
                if (pkg.hash)
                    Laya.URL.version[manifestPath] = pkg.hash;
                if (pkg.path.length > 0 && pkg.autoLoad)
                    promises.push(Laya.loader.loadPackage(pkg.path, pkg.remoteUrl, progressCallback.createCallback()));
            }
        }
        Promise.all(promises).then(() => {
            if (config.startupScene) {
                Laya.Scene.open(config.startupScene, true, null, null, Laya.Handler.create(null, loadSceneProgress, null, false)).then(() => {
                    if (window && window.hideSplashScreen)
                        window.hideSplashScreen();
                });
            }
            else {
                if (window && window.hideSplashScreen)
                    window.hideSplashScreen();
            }
        });
    });
})();
