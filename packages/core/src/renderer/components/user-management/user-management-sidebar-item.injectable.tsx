/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import { getInjectable } from "@ogre-tools/injectable";
import { sidebarItemInjectionToken } from "@k8slens/cluster-sidebar";
import { Icon } from "../icon";
import React from "react";
import { noop } from "lodash/fp";

const userManagementSidebarItemInjectable = getInjectable({
  id: "user-management-sidebar-item",

  instantiate: () => ({
    id: "user-management",
    parentId: null,
    getIcon: () => <Icon material="security" />,
    title: "Access Control",
    onClick: noop,
    orderNumber: 100,
  }),

  injectionToken: sidebarItemInjectionToken,
});

export default userManagementSidebarItemInjectable;