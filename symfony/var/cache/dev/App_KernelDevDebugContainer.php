<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\ContainerWg1Wd9a\App_KernelDevDebugContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/ContainerWg1Wd9a/App_KernelDevDebugContainer.php') {
    touch(__DIR__.'/ContainerWg1Wd9a.legacy');

    return;
}

if (!\class_exists(App_KernelDevDebugContainer::class, false)) {
    \class_alias(\ContainerWg1Wd9a\App_KernelDevDebugContainer::class, App_KernelDevDebugContainer::class, false);
}

return new \ContainerWg1Wd9a\App_KernelDevDebugContainer([
    'container.build_hash' => 'Wg1Wd9a',
    'container.build_id' => '74a431e3',
    'container.build_time' => 1631015069,
], __DIR__.\DIRECTORY_SEPARATOR.'ContainerWg1Wd9a');
