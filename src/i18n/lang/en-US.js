import el from "element-ui/lib/locale/lang/en";
import fu from "fit2cloud-ui/src/locale/lang/en_US"; // 加载fit2cloud的内容

const message = {
  commons: {
    message_box: {
      alert: "Warning",
      confirm: "Confirm",
      prompt: "Prompt"
    },
    dialog: {
      delete: "Delete"
    },
    confirm_message: {
      delete: "This operation cannot be undone, do you want to continue?",
      uncordon: "This operation will restore the node to a schedulable state. Do you want to continue?",
    },
    button: {
      login: "Login",
      ok: "Ok",
      save: "Save",
      delete: "Delete",
      import: "Import",
      batch_import: "Batch Import",
      upgrade: "Upgrade",
      check: "Diagnostic",
      cancel: "Cancel",
      return: "Return",
      create: "Create",
      confirm: "Confirm",
      edit: "Edit",
      sync: "Sync",
      enable: "Enable",
      disable: "Disable",
      jump_to: "Go to",
      search: "Search",
      verify: "Verify",
      management: "Management",
      submit: "Submit",
      refresh: "Refresh",
      authorize: "Authorize",
      revoke_authorize: "Cancel authorization",
      getBucket: "Get bucket",
      update: "Update",
      upload: "Upload",
      retry: "Retry",
      history: "History",
      error_msg: "Error",
      lock: "Enable/Disable",
      relation: "Associate",
      cordon: "Disperse",
      uncordon: "Resume to disperse",
      log: "Log"
    },
    msg: {
      success: "{0} success",
      op_success: "Operate successfully",
      save_success: "Saved successfully",
      delete_success: "Deleted successfully",
      sync_success: "Synchronized successfully",
      create_success: "Created successfully",
      verify_success: "Verify successfully",
      import_success: "Imported successfully",
      enable_success: "Activated successfully",
      re_enable_success: "Re-enable successfully",
      disable_success: "Disabled successfully",
      update_success: "Update completed",
      upgrade_start_success: "The cluster upgrade has started, please wait...",
    },
    validate: {
      limit: "Length from {0} to {1} characters",
      input: "Please enter {0}",
      cannot_be_empty: "The content cannot be empty!",
      name_not_compliant: "The name does not conform to the naming convention!",
      select: "Please choose",
      required_msg: "Entry cannot be empty",
      ip_error: "Please enter the correct IP address",
      password_help: "Valid password: 8-30 digits, English letters + numbers + special characters (optional)",
      number_limit: "Please enter the correct number",
      email: "E-mail format is incorrect",
      common_name_help: "Lowercase English, numbers and-",
      name_help: "Chinese, uppercase and lowercase English, numbers and-",
      ip_range_error: "IP range error",
      subnet_error: "Subnet error",
    },
    search: {
      name: "",
      quickSearch: "Fast Search",
      select: "Please select {0}",
      time: "Time",
      time_start: "Starting time",
      time_end: "End Time",
      time_range: "to",
      date_start: "Start date",
      date_end: "End date",
      synchronizing: "Synchronizing",
    },
    personal: {
      change_password: "Change Password",
      help_documentation: "Help document",
      exit_system: "Exit system",
      new_password: "New password",
      original_password: "Old password",
      confirm_password: "Confirm password",
      confirm_password1_info: "Inconsistent passwords",
      about: "About",
      project_url: "Project address",
      issue: "Feedback",
      talk: "Participate in the discussion",
      star: "Star",
      version: "Version",
      ko_introduction: "KubeOperator is an open source, lightweight Kubernetes distribution that focuses on helping companies plan, deploy, and operate production-level Kubernetes clusters."
    },
    help: {
      help: "Help",
      api_docs: "API document",
      business_support: "Business support",
      ko_docs: "Official document",
    },
    table: {
      action: "Operate",
      name: "Name",
      status: "Status",
      description: "Description",
      create_time: "Creation time",
      type: "Type",
      username: "Username"
    },
    status: {
      running: "Running",
      initializing: "Initializing",
      creating: "Creating",
      success: "Success",
      failed: "Failed",
      not_ready: "Not ready",
      error: "Error",
      active: "Active",
      passive: "Disable",
      waiting: "Waiting",
      upgrading: "Upgrading",
      terminating: "Destroying",
      synchronizing: "Synchronizing",
      normal: "Normal",
      failure: "Abnormal",
      disable_scheduling: "Disable scheduling",
    },
    role: {
      admin: "Admin",
      user: "User"
    },
    form: {
      number_validate: "Please enter the correct number",
      ip_range_error: "Ip range is invalid",
      yes: "yes",
      no: "No",
      file_upload_help: "Drag the file here, or click upload",
    }
  },
  login: {
    username: "Username",
    password: "Password",
    title: "Login KubeOperator",
    welcome: "Welcome back, please enter your username and password to log in",
    expires: "The authentication information has expired, please log in again",
    captcha: "Verification code",
    forget_password: "Forgot password",
    reset_password: "Reset Password",
    email: "Email",
    reset_message: "Password reset successfully! Please check your emails"
  },
  theme: {
    systemName: "Login page title",
    logo: "Logo",
    uploadLogoHelper: "Only image files in jpg/png formats can be uploaded. If the uploaded picture is empty, it will be restored to the default Log",
    uploadLogoNumHelper: "Only one file can be uploaded by default, please delete the current file and upload again!"
  },
  route: {
    project_management: "Project Management",
    cluster: "Cluster",
    host: "Host",
    system_setting: "System Settings",
    manifest: "Version Management",
    message_center: "Message Center",
    backup_account: "Backup Account",
    system_log: "System Log",
    complex_table: "Compound Form",
    user: "User Management",
    multi_cluster: "Multi-cluster Management",
    theme: "Theme",
    ldap: "LDAP",
  },
  cluster: {
    cluster: "Cluster",
    project: "Project",
    cluster_detail: "Cluster details",
    version: "Version",
    node_size: "Number of nodes",
    creation: {
      step1: "Cluster information",
      name: "Name",
      name_check: "Checking",
      name_help: "Support lowercase English, numbers and-cannot start with a number",
      name_invalid_err: "Invalid cluster name",
      provider: "Provider",
      provide_plan: "Deployment plan",
      provide_bare_metal: "Bare metal",
      version: "Version",
      arch: "Architecture",
      repo_err: "Please complete the corresponding warehouse information in the system settings",
      yum_repo: "Yum warehouse",
      yum_repo_replace_help:
        "This operation will back up the original yum repo file of the K8S node server, and then generate and use only the yum repo of KubeOperator",
      yum_repo_coexist_help: "This operation will keep the original yum repo file of the K8S node server unchanged, while generating and using kubeoperator's yum repo",
      yum_repo_no_help: "This operation will keep using the original yum repo file of the K8S node server, and will not do any operation on the yum repo of the K8S node server",
      step2: "Cluster setup",
      container_network: "Container network",
      cluster_cidr: "Cluster CIDR",
      max_node_pod_num: "Maximum number of POD/nodes",
      max_cluster_service_num: "Maximum number of services/cluster",
      proxy_mode: "proxy mode",
      dns_cache: "dns cache",
      kubernetes_audit: "Kubernetes audit",
      enable: "Enable",
      disable: "Disable",
      network_help: "CIDR cannot overlap with the target IP segment, otherwise it will cause initialization failure",
      max_node_num_show: "Under the current container network configuration, the cluster has at most {0} nodes",
      step3: "Runtime settings",
      runtime_type: "Container runtime",
      docker_storage_dir: "Docker data path",
      containe_storage_dir: "Container data path",
      subnet: "Container subnet",
      step4: "Container network settings",
      network_interface: "NIC name",
      network_interface_help: "Multi-NIC environment needs to specify the name of the NIC to be used, and single NIC environment does not need to fill in",
      network_type: "Container network",
      flannel_backend: "Network mode",
      cilium_help: "Cilium officially recommends that the kernel version be at least 4.9.17",
      cilium_overlay_help: "Based on the encapsulated virtual network, all hosts are generated. Currently VXLAN and Geneve have been completed, but all encapsulation formats supported by Linux can be enabled.",
      cilium_overlay_help_more: "This model has minimal infrastructure and integration requirements. It is suitable for almost any network infrastructure, because the only requirement is the IP connection between the hosts, which is usually already given.",
      cilium_native_help: "Use the regular routing table of the Linux host. The network must be able to route the IP address of the application container. This mode is suitable for advanced users who need to understand the underlying network infrastructure.",
      cilium_native_help_more: "Suitable for (1. Native IPv6 network, 2. Use with cloud network router, 3. If you are already running a routing daemon)",
      flannel_backend_help_route_base: "Based on routing, not applicable to public cloud environment;",
      flannel_backend_help_route_advantage: "The advantage is that there is no packet and unpacking process, and the forwarding is completely based on the routing tables of the hosts at both ends.。",
      flannel_backend_help_route_inferiority: "The disadvantage is that the host is required to be interoperable in the layer 2 network, and the expansion of the routing table will cause performance degradation。",
      flannel_backend_help_channel_base: "Based on the tunnel, it can work normally in any network environment;",
      flannel_backend_help_channel_advantage: "The advantage is that there are no special requirements for the physical network environment, as long as the host IP layer can be routed and communicated.。",
      flannel_backend_help_channel_inferiority: "The disadvantage is that packaging and unpacking consumes CPU performance, and additional packaging leads to waste of bandwidth。",
      step5: "Component settings",
      ingress_type: "ingress type",
      support_gpu: "Install GPU kit",
      step6_of_bare_metal: "Node information",
      node_help: "The host needs to be authorized in the project-resource first",
      master_select_help: "(The number of Master nodes must be 1 or 3)",
      step6_of_plan: "Deployment plan",
      worker_num: "Number of Workers",
      step7: "Configuration preview",
      base_setting: "basic configuration"
    },
    upgrade: {
      current_version: "current version",
      upgrade_version: "updated version",
      upgrade_help: "Does not support K8s cross-large version upgrade or upgrade to K8s version that is not enabled, please confirm in version management。",
    },
    import: {
      import_cluster: "Cluster import",
      api_server_help: "For example: https://172.16.10.100:8443",
      router_help: "The IP address of any node with kube-proxy installed and accessible",
    },
    delete: {
      delete_cluster: "Cluster delete",
      is_force: "Is it mandatory",
    },
    health_check: {
      health_check: "health examination",
      level: "grade",
      message: "message",
      method: "method",
      result: "result",
      recover: "restore",
    },
    condition: {
      condition_detail: "Status details",
      EnsureInitTaskStart: "Scheduling tasks",
      EnsurePrepareBaseSystemConfig: "Prepare the system environment",
      EnsurePrepareContainerRuntime: "Initialize the container engine",
      EnsurePrepareKubernetesComponent: "Prepare Kubernetes components",
      EnsurePrepareLoadBalancer: "Prepare the load balancer",
      EnsurePrepareCertificates: "Prepare the CA certificate",
      EnsureInitEtcd: "Initialize ETCD",
      EnsureInitMaster: "Initialize the control plane",
      EnsureInitWorker: "Initialize workload",
      EnsureInitNetwork: "Initialize the network",
      EnsureInitHelm: "Initialize Helm",
      EnsureInitMetricsServer: "Initialize the monitoring component",
      EnsureInitIngressController: "Initialize service exposure components",
      EnsurePostInit: "Configure the cluster",
      EnsureBackupETCD: "Backup cluster",
      EnsureUpgradeRuntime: "Upgrade the container engine",
      EnsureUpgradeETCD: "Upgrade ETCD",
      EnsureUpgradeKubernetes: "Upgrade Kubernetes",
      EnsureUpdateCertificates: "Renew certificate",
      EnsureUpgradeTaskStart: "Scheduling tasks",
      DeleteCluster: "Delete cluster",
    },
    detail: {
      tag: {
        overview: "Overview",
        node: "Node",
        namespace: "Namespace",
        storage: "Storage",
        event: "Event",
        monitor: "Monitor",
        log: "Log",
        tool: "Tool",
        backup: "Backup",
        security: "CIS Scan",
        grade: "Cluster Scoring",
      },
      overview: {
        source: "Source",
        base_info: "Basic information",
        capacity_info: "Capacity information",
        statistical_info: "Statistics",
        cpu: "CPU usage",
        memery: "Memory usage",
        docker: "Container group",
        connect: "Execute WebKubeCtl command line",
        download_kube_config: "Download the KubeConfig file",
        open_in_new_windows: "Opens in a new window",
      },
      node: {
        increment: "Increment",
        operator_help: "The imported cluster does not currently support scaling",
        host: "Host",
        node_detail: "Node details",
        base_infomation: "Basic information",
        label: "Label",
        status: "Status",
        cordon: "Disperse",
        uncordon: "Restore",
        mode: "Mode",
        safe: "Safety",
        force: "Compulsory",
        safe_cordon_help: "If a node has an independent Pod or temporary data, it will be quarantined but will not be dispelled.",
        force_drain_help1: "delete permanently：",
        force_drain_help2: "1. Independent Pods and their data",
        force_drain_help3: "2. Pods configured with Empty Dir volume and their data",
      },
      namespace: {
        before_delete: "The deletion failed, the tool already exists in the namespace：",
      },
      storage: {
        type: "Type",
        pv: "Persistent volume",
        pv_create: "Add persistent volume",
        storage_class: "Storage class",
        storage_clas_create: "Add storage class",
        provisioner_name: "Provider name",
        provisioner: "Storage provider",
        provisioner_short: "Provider",
        provisioner_create: "Add storage provider",
        storage_class_exist: "This storage provider is already bound to the storage class and cannot be deleted！",
        disk_name: "Disk name",
        disk_name_help: "Fill in the disk name, multiple disks are separated by commas, for example:'sdb,sdc'",
        is_block_enable: "Whether to enable block storage",
        cinder_version_help: "Currently only supports v3 version",
        vsphere_select_help: "Minimum requirements for VMware environment: 1. vCenter 6.7 Update 3, 2. ESXi v6.7.0",
        deploy_mode: "Deployment type",
        multi_path_networking: "Multipath networking",
        product: "Product",
        manage_url: "Management URL",
        user_name: "Username",
        password: "Password",
        storage_pool: "Storage pool",
        logic_port: "Logical port IP",
        business_ip: "iscsi business IP",
        logic_port_help: "Multiple logical port IPs are separated by commas, for example:'test1,test2'",
        business_ip_help: "Multiple business IPs are separated by commas, for example: '10.1.1.1, 10.1.1.2'",
        vcenter_host: "vCenter host",
        vcenter_port: "vCenter port",
        vcenter_username: "vCenter username",
        vcenter_password: "vCenter password",
        ensure_provisioner_sync: "Are you sure to synchronize the following storage providers?",
        start_provisioner_sync: "Storage provider synchronization has started, please wait...",
        reclaim_policy: "Recycling strategy",
        volume_binding_mode: "Volume binding mode",
        capacity: "Capacity",
        source: "Source",
        class: {
          clone_form_help: "Optional, the format is storage backend name. Original volume name",
          clone_speed_help: "Optional, default value 3, support 1~4, 4 is the fastest",
          storage_policy_type: "Storage policy type",
          storage_policy: "Storage policy",
          build_in: "Built-in",
          custom: "customize",
        },
      },
      event: {
        msg_info: "Message",
        msg_type: "Type",
        component: "Component",
        enable_npd: "Enable NPD",
        enable_npd_success: "NPD Successfully activated",
        disable_npd_success: "NPD Successfully disabled",
      },
      log: {
        time: "Time",
        msg_info: "Message content",
        monitor_node: "Monitoring node",
        label: "label",
        value: "Label value",
        match_info: "Match content",
        match_info_quick: "Search by matching content",
      },
      tool: {
        enable_title: "Enable tool",
        disable_title: "Disable tools",
        info_title: "Prompt information",
        err_title: "Error message",
        upgrade_title: "Version upgrade",
        disable_show_msg: "Disabling this tool will result in data loss, whether to continue？",
        enable_storage: "Enable storage",
        storage_class: "Storage class",
        storage_size: "Size (Gi)",
        data_retention: "Data retention (days)",
        search_index: "Prefix index",
        search_index_help: "For example: logstash",
        replicas: "Number of copies",
        max_replicas_num: "The maximum number of copies is",
        hip_memery: "Heap memory (GB)",
        default_hip_memery: "The default value is 1G",
        password: "password",
        password_re: "Confirm password",
        log_err_msg: "logging and loki do not support simultaneous activation！",
        grafana_err_msg: "Please enable promethues as the default data source first!",
        grafana_password_help: "Inconsistent passwords",
      },
      istio: {
        err_title: "Error message",
        cpu_limit: "CPU limit (m)",
        memory_limit: "Memory limit (Mb)",
        cpu_request: "CPU reservation",
        memory_request: "Memory reservation (Mb)",
        trace: "Tracking sampling ratio (%)",
        gateways_type: "Gateway service type",
        disable_istio: "Disable Istio",
        resave: "Resave",
        ensure_disable_istio: "Are you sure to disable cluster Istio?",
      },
      backup: {
        backup_strategy: "Backup strategy",
        backup_interval: "Backup interval (days)",
        retained_number: "Keep copies",
        backup_account: "Backup account",
        backup_account_help: "The backup account needs to be authorized to the project first",
        status: "Status",
        local_recover: "Local file recovery",
        backup_start: "Backup has started! Please check the log later",
        recover_start: "Recovery has begun! Please check the log later",
        local_recover_tips: "Please upload the original file, do not upload the compressed file",
        file: "File",
        mo_file_selected: "No file selected",
        file_select: "File selection",
        backup_now: "Back up now",
        backup_list: "Backup list",
        backup_location: "Backup location",
        backup_recover: "Backup/restore",
        backup_log: "Log",
        recover: "Restore",
        recover_success: "Start the recovery, please check the log later",
        CLUSTER_RESTORE: "Cluster recovery",
        CLUSTER_BACKUP: "Cluster backup",
        SUCCESS: "Success",
        Running: "Running",
        restore_message: "Make sure to use this backup file to restore？",
        FAILED: "Failed",
        detail: "Detail"
      },
      security: {
        start_time: "Starting time",
        end_time: "End Time",
        cis_result: "Cis scan results",
        code: "Number",
        description: "Description",
        advise: "Suggest",
        start_cis: "Whether to start the CIS scan task？",
      },
      f5: {
        big_ip_addr: "BIG-IP Address",
        big_ip_user_name: "BIG-IP Username",
        big_ip_password: "BIG-IP Password",
        big_ip_public: "BIG-IP Public IP",
      },
      grade: {
        danger: "Serious",
        warning: "Warning",
        pass: "Pass",
        total: "Total",
        health_checks: "health examination",
        images: "Image",
        networking: "Network",
        reliability: "Reliability",
        resources: "Resources",
        security: "Security",
      },
    },
  },
  message: {
    message: "message",
    message_center: "Message Center",
    message_receiver: "Receiver",
    message_subscribe: "Subscribe",
    content: "Content",
    type: "Type",
    level: "Level",
    mark_as_read: "Mark",
    dingTalk_phone: "DingTalk Phone",
    dingTalk_phone_help: "Used for Dingding to receive alarm messages",
    work_wechat_id: "Enterprise WeChat User ID",
    work_wechat_id_help: "Used for enterprise WeChat to receive alarm messages",
    work_wechat_url_help: "How to find userid?",
    email: "Email",
    message_type: "Type",
    message_in_station: "Station Message",
    mail: "Email",
    work_wechat: "Wechat",
    dingTalk: "DingTalk",
    title: {
      CLUSTER_EVENT_WARNING: "Cluster event alarm",
      CLUSTER_INSTALL: "Cluster installation",
      CLUSTER_REMOVE_WORKER: "Node delete"
    },
    detail: {
      basicInformation: "Information",
      message_detail: "Detail",
      clusterName: "Cluster",
      host: "Host",
      name: "Name",
      type: "Type",
      kind: "Kind",
      component: "Component",
      detail: "Detail",
      namespace: "Namespace",
      cause: "Cause",
      time: "Time"
    },
    READ: "READ",
    UNREAD: "UNREAD"
  },
  manifest: {
    title: "Version Management",
    detail: "Detail",
    enable: "enable",
    enable_message: "version {0} successfully enabled！",
    disable_message: "version {0} successfully disabled！",
    component: "component",
    version: "version",
    see_documentation: "documentation",
    manifest_help: "By default, Kubernetes in the offline package only carries the latest two versions. If the current environment is offline, you need to execute the script to generate the old version of Kubernetes offline package and push it to the nexus warehouse."
  },
  system_log: {
    title: "SystemLog",
    operation: "operate",
    operation_info: "Operation content",
    query_placeholder: "Search by name/operation/operation content"
  },
  automatic: {
    name: "Automatic Mode",
    cloud_provider: "Cloud provider",
    datacenter: "DataCenter",
    basic: "Basic Information",
    detail: "Detail",
    region: {
      name: "Region",
      basic: "Basic Information",
      config: "Configuration Parameter",
      description: "Region: Similar to the concept of Region in the public cloud, such as Alibaba Cloud North China 1. For vSphere, the region corresponds to Datacenter.",
      vcenter_host: "Vcenter Host",
      vcenter_port: "Vcenter Port",
      vcenter_username: "Username",
      vcenter_password: "Password",
      openstack_identity: "identity",
      openstack_project: "Project ID",
      openstack_domain: "DomainName",
      fusionCompute_server: "FusionCompute Service Address",
      get_datacenter: "Get DataCenter",
      vcenter_api_help: "vCenter API Address",
      vcenter_user_help: "Username for accessing vCenter, for example administrator@vsphere.local",
      vcenter_password_help: "Password to access vCenter",
      openstack_keystone_help: "OpenStack keystone address",
      openstack_username_help: "Username for accessing OpenStack",
      openstack_password_help: "Password to access OpenStack",
      openstack_project_help: "OpenStack project ID",
      openstack_domain_help: "OpenStack Domain Name",
      fusionCompute_server_help: "FusionCompute API service address, for example: https://10.1.240.11:7443",
      fusionCompute_user_help: "User name for accessing FusionCompute, for example: admin",
      fusionCompute_password_help: "Password for accessing FusionCompute",
    },
    zone: {
      name: "Zone",
      description: "Zone: Similar to the concept of AZ in the public cloud, it can be understood as a specific computer room in a region, such as Beijing Zone 1 and Beijing Zone 2. For vSphere, the availability zone corresponds to the cluster, and it can also correspond to the resource pool under the cluster",
      ready: "Ready",
      uploadImageError: "Failed to upload image",
      initinitializingializing: "Initializing",
      config: "Configuration Parameter",
      compute: "Compute",
      cluster: "Cluster",
      resource_pool: "Resource Pool",
      datastore: "Datastore",
      value: "By remaining amount",
      usage: "By usage",
      datastore_type: "Placement Method",
      template: "Template",
      template_type: "Template Type",
      default: "Default",
      customize: "Customize",
      network: "Network",
      network_adapter: "Network Adapter",
      security_group: "Security Group",
      ip_type: "IP Type",
      floating_ip: "Floating IP",
      subnet: "Subnet",
      storageType: "Storage Type",
      switch: "Switch",
      nfs_address: "NFS Server Address",
      nfs_port: "NFS Service Port",
      nfs_folder: "NFS Server Folder",
      nfs_username: "NFS Server Username",
      nfs_password: "NFS Server Password",
      old_datastores: "Selected Datastore",
      new_datastores: "New Datastore",
      initializing: "Initializing"
    },
    plan: {
      name: "Plan",
      description: "Deployment plan (Plan): An abstract concept used in KubeOperator to describe in which area, in which availability zone, what machine specifications are used, and what type of cluster is deployed",
      deploy_template: "Deployment Model",
      SINGLE: "One master and multiple nodes",
      MULTIPLE: "Multi-master and multi-node",
      project_auth: "Project Authorization",
      master_model: "Master Specification",
      worker_model: "Worker Specification",
      config: "Specification Reference"
    },
    vm_config: {
      name: "Virtual Machine Configuration",
      cpu: "CPU (core)",
      memory: "RAM (GB)",
      name_validate_msg: "Support English and numbers",
      cpu_invalid: "CPU range 1～1000",
      mem_invalid: "Memory range 1～1000",
      disk: "Disk (GB)"
    },
    ip_pool: {
      name: "IP pool",
      subnet: "Subnet",
      ip_usage: "Usage",
      gateway: "Gateway",
      ip_start: "Start IP",
      ip_end: "End IP",
      dns1: "DNS1",
      dns2: "DNS2",
      description: "Description",
      address: "IP",
      status: "Status",
      ip_list: "IP List",
      ip_available: "Available",
      ip_lock: "Occupy",
      ip_used: "Using",
      ip_reachable: "Reachable",
      subnet_help: "172.1.10.0/24",
      ip_start_help: "172.1.10.1",
      ip_end_help: "172.1.10.10",
      gateway_help: "172.1.10.254",
      dns1_help: "8.8.8.8",
      dns2_help: "114.114.114.114",
    }
  },
  project: {
    project: "Project",
    member: "Member Management",
    resource: "Resource Management",
    CLUSTER_MANAGER: "Cluster manager",
    PROJECT_MANAGER: "Project manager",
    description: "Description",
    add_project_manager: "Add project manager",
    add_project_resource: "Add resource",
    add_cluster_manager: "Add cluster manager",
    key_words: "Please type in your name",
    list: "Project list",
    header_description: "On the left is the project-cluster tree, on the right is personnel and resource management",
  },
  credential: {
    name: "Credential Name",
    credential: "Credential",
    username: "Username",
    password: "Password",
    privateKey: "Key",
    type: "Type"
  },
  setting: {
    registry: "Registry",
    ntp: "NTP",
    email: "Email",
    license: "License",
    message: "Message",
    credential: "Credential",
    ntpServer: "NTP server",
    table: {
      registry: {
        protocol: "Protocol",
        hostname: "Address",
        arch: "CPU architecture",
        hostname_help: "The default is the IP of the server where KubeOperator is deployed. This IP will be used to access the nexus registry"
      },
      mail: {
        smtp: "SMTP Address",
        port: "Port",
        username: "Username",
        password: "Password",
        testUser: "Test User",
        status: "Status"
      },
      ldap: {
        address: "Address",
        port: "Port",
        username: "Username",
        password: "Password",
        filterDN: "User filtering DN",
        filterRule: "User filtering rules",
        status: "Status",
        ldapHelper: "Note: Users without mailboxes will not be synchronized, and those with the same login name as local users will not be synchronized!"
      },
      license: {
        title: "KubeOperator license",
        corporation: "Company",
        count: "Count",
        expiration: "Expire Date",
        edition: "Version",
        status: "Status",
        valid: "Valid",
        invalid: "InValid",
        expired: "Be Expired",
        licenseFile: "License",
        communityEdition: "Community Edition"
      },
      message: {
        wechat: "Enterprise WeChat",
        dingTalk: "DingDing",
        testUser: "Test User",
        status: "Status",
        webhookAddress: "Webhook Address",
        dingTalkConcept: "Basic concepts of DingDing",
        dingTalkLimit: "DingDing message frequency limit",
        wechatConcept: "Basic Concepts of Enterprise WeChat",
        wechatLimit: "Enterprise WeChat message frequency limit",
        wechatSetting: "Enterprise WeChat settings",
        dingTalkSetting: "Dingding settings",
      }
    },
    option: {
      addRegistry: "Add Registry",
      editRegistry: "Edit Registry",
      addCredential: "Add SSH Credentials",
      editCredential: "Add SSH Credential",
      addLicense: "Add License"
    },
    helpInfo: {
      inputPassword: "Please enter the password",
      messageInfo: "Note: As each company has different message restrictions, KubeOperator does not make active restrictions. Please use it according to your own circumstances."
    }
  },
  multi_cluster: {
    multi_cluster: "Multi-cluster",
    repository_setting: "Registry settings",
    basic_setting: "Basic Settings",
    senior_setting: "Advanced settings",
    address: "Address",
    branch: "Branch",
    auth: "Certification",
    username: "Username",
    password: "Password",
    sync_interval: "Synchronization interval (minutes)",
    pull_timeout: "Pull timeout time (minutes)",
    edit: "Edit",
    cluster_list: "Cluster list",
    selected_clusters: "Choose a cluster",
    relation_management: "Association management",
    log: "Log"
  }
}

export default {
  ...el,
  ...fu,
  ...message
};

